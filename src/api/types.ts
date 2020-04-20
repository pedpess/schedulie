export type WeekDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type OpenSchedule = {
  type: Status;
  value: number;
};

export enum Status {
  OPEN = 'open',
  CLOSE = 'close',
}

export type RemoteOpenScheduleData = { [key in WeekDay]: OpenSchedule[] };
