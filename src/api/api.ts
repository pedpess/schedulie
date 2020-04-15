import { Schedule } from './types';
import { data } from './db';
import { delay } from './utils';

export async function getOpeningHours(): Promise<Schedule> {
  try {
    await delay(1000);
    return data;
  } catch (e) {
    throw new Error(e);
  }
}
