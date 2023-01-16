export interface Date {
  name: string;
  numeric: string;
}

export interface Observed {
  name: string;
  numeric: string;
}

export interface Weekday {
  date: Date;
  observed: Observed;
}

export interface Holiday {
  name: string;
  date: string;
  observed: string;
  public: boolean;
  country: string;
  uuid: string;
  weekday: Weekday;
}
