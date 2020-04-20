import React, { useState, useEffect } from 'react';
import {
  TextBold24,
  Color,
  TextMedium16,
  TextRegular16,
  TextBold12,
} from '../Theme';
import {
  Container,
  Header,
  List,
  ListItem,
  ListItemWrapper,
  LoadingWrapper,
} from './styled';
import { Feather } from '@expo/vector-icons';
import {
  firstLetterCaps,
  isTodayWeekDay,
  convertSecondsToHours,
} from '../../lib';
import {
  Status,
  OpenSchedule,
  WeekDay,
  RemoteOpenScheduleData,
} from '../../api/types';
import * as api from '../../api/api';

interface ParsedOpenSchedule {
  weekDay: string;
  openSchedule: string;
  isClosed: boolean;
  isToday: boolean;
}

function parseRemoteOpenScheduleData(
  data: RemoteOpenScheduleData
): ParsedOpenSchedule[] {
  const WEEK_DAYS: WeekDay[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  return WEEK_DAYS?.map((weekDay, weekDayIndex) => {
    const openSchedule: OpenSchedule[] = data?.[weekDay];
    const isClosedInSameDay =
      openSchedule.length === 1 && openSchedule[0].type === Status.CLOSE;
    const isClosedAllDay = !openSchedule.length || isClosedInSameDay;

    let parsedOpenSchedule = '';

    openSchedule.forEach((element, index) => {
      const { type, value } = element;
      const formattedTime = convertSecondsToHours(value);

      if (type === Status.OPEN) {
        const split = index > 1 ? ', ' : '';
        parsedOpenSchedule += `${split}${formattedTime}`;

        if (index === openSchedule.length - 1) {
          const nextWeekDayComparatorIndex =
            weekDayIndex === WEEK_DAYS.length - 1 ? 0 : weekDayIndex + 1;
          const nextWeekDay = WEEK_DAYS[nextWeekDayComparatorIndex];
          const { type, value } = data?.[nextWeekDay][0] || {};

          const nextWeekDayCorrectValue = type === Status.CLOSE ? value : 0;
          parsedOpenSchedule += `\u00A0-\u00A0${convertSecondsToHours(
            nextWeekDayCorrectValue
          )}`;
        }
      } else if (type === Status.CLOSE) {
        if (index === 0) return;
        parsedOpenSchedule += `\u00A0-\u00A0${formattedTime}`;
      }
    });

    return {
      weekDay: firstLetterCaps(weekDay),
      openSchedule: parsedOpenSchedule,
      isClosed: isClosedAllDay,
      isToday: isTodayWeekDay(weekDayIndex + 1),
    };
  });
}

interface Props {
  headerTitle: string;
}

interface State {
  loading: boolean;
  error: string | null;
  data: RemoteOpenScheduleData | null;
}

export const Card: React.FC<Props> = ({ headerTitle }) => {
  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    setState({ loading: true, data: null, error: null });
    api
      .getOpeningHours()
      .then((data) => setState({ loading: false, data, error: null }))
      .catch((error) => setState({ loading: false, data: null, error }));
  }, []);

  const { loading, data } = state;

  let weekSchedule = null;

  if (data) {
    weekSchedule = parseRemoteOpenScheduleData(data);
  }

  return (
    <Container>
      <Header>
        <Feather
          name="clock"
          size={20}
          color={Color.GREY_3}
          style={{ marginRight: 12 }}
        />
        {headerTitle ? <TextBold24>{headerTitle}</TextBold24> : null}
      </Header>
      {loading ? (
        <LoadingWrapper>
          <TextMedium16>Loading...</TextMedium16>
        </LoadingWrapper>
      ) : (
        <List>
          {weekSchedule?.map(
            ({ weekDay, openSchedule, isClosed, isToday }, index) => {
              return (
                <ListItem key={weekDay + index}>
                  <ListItemWrapper>
                    <TextMedium16>{weekDay}</TextMedium16>
                    {isToday && (
                      <TextBold12 color={Color.GREEN} style={{ marginLeft: 5 }}>
                        TODAY
                      </TextBold12>
                    )}
                  </ListItemWrapper>
                  {isClosed ? (
                    <TextRegular16 color={Color.GREY_3}>Closed</TextRegular16>
                  ) : (
                    <TextRegular16>{openSchedule}</TextRegular16>
                  )}
                </ListItem>
              );
            }
          )}
        </List>
      )}
    </Container>
  );
};
