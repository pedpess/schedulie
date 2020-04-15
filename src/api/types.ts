export interface Schedule {
  monday: (OpeningHours | null)[];
  tuesday: (OpeningHours | null)[];
  wednesday: (OpeningHours | null)[];
  thursday: (OpeningHours | null)[];
  friday: (OpeningHours | null)[];
  saturday: (OpeningHours | null)[];
  sunday: (OpeningHours | null)[];
}

interface OpeningHours {
  type: string;
  value: number;
}
