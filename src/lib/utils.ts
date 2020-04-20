import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import weekDay from 'dayjs/plugin/weekday';
dayjs.extend(utc);
dayjs.extend(weekDay);

export function delay(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

export function convertSecondsToHours(time: number): string {
  return dayjs.utc(time * 1000).format('h A');
}

export function firstLetterCaps(word: string): string {
  return word.charAt(0).toUpperCase().concat(word.slice(1));
}

export function isTodayWeekDay(weekDay: number): boolean {
  const today = dayjs().get('day');
  return today === weekDay;
}
