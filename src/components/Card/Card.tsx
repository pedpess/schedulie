import React, { useState, useEffect } from 'react';
import {
  TextBold30,
  Color,
  TextMedium22,
  TextBold16,
  TextRegular22,
} from '../Theme';
import { Container, Header, List, ListItem, ListItemWrapper } from './styled';
import { Feather } from '@expo/vector-icons';
import { Schedule } from '../../api/types';
import * as api from '../../api/api';

interface Props {
  headerTitle: string;
  headerIcon?: boolean;
  headerIconSize?: number;
}

interface State {
  loading: boolean;
  error: string | null;
  remoteData: Schedule | null;
}

function renderListItem(): React.ReactNode {
  return (
    <ListItem>
      <ListItemWrapper>
        <TextMedium22>Monday</TextMedium22>
        <TextBold16 color={Color.GREEN} style={{ marginLeft: 10 }}>
          TODAY
        </TextBold16>
      </ListItemWrapper>
      <TextRegular22>10 AM - 1 AM</TextRegular22>
    </ListItem>
  );
}

export const Card: React.FC<Props> = ({
  headerTitle,
  headerIcon,
  headerIconSize,
}) => {
  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    remoteData: null,
  });

  useEffect(() => {
    api.getOpeningHours().then(
      (data) => setState({ loading: false, remoteData: data, error: null }),
      (error) => setState({ loading: false, remoteData: null, error: error })
    );
  }, []);

  return (
    <Container>
      <Header>
        {console.log(state.remoteData)}
        {headerIcon ? (
          <Feather
            name="clock"
            size={headerIconSize ? headerIconSize : 26}
            color={Color.GREY_3}
            style={{ marginRight: 12 }}
          />
        ) : null}
        {headerTitle ? <TextBold30>{headerTitle}</TextBold30> : null}
      </Header>

      <List>
        <ListItem>
          <ListItemWrapper>
            <TextMedium22>Monday</TextMedium22>
            <TextBold16 color={Color.GREEN} style={{ marginLeft: 10 }}>
              TODAY
            </TextBold16>
          </ListItemWrapper>
          <TextRegular22>10 AM - 1 AM</TextRegular22>
        </ListItem>
      </List>
    </Container>
  );
};
