import { delay } from '../lib';
import { RemoteOpenScheduleData } from './types';

const BASE_URL = 'https://add72811.ngrok.io';

export async function getOpeningHours(): Promise<RemoteOpenScheduleData> {
  try {
    const response = await fetch(`${BASE_URL}/schedule`);
    await delay(1500);
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}
