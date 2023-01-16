import { Injectable } from '@nestjs/common';
import * as dateFns from 'date-fns';
import { HolidaysTracker } from '../holidaysTracker';
import { FeeRating, MAX_FEE } from './constants';

@Injectable()
export class TimeTracker {
  constructor(private readonly holidaysTracker: HolidaysTracker) {}

  public async getTollFee(
    checkInDate: Date,
    checkOutDate: Date,
  ): Promise<number> {
    const isDayOff = await this.isDayOff(checkInDate);
    if (isDayOff) {
      return 0;
    }

    const checkInHours: Date[] = this.getCheckInHours(
      checkInDate,
      checkOutDate,
    );

    const calculatedFee = checkInHours.reduce((fee, item) => {
      return this.getFeePerHour(item) + fee;
    }, 0);

    return calculatedFee > MAX_FEE ? MAX_FEE : calculatedFee;
  }

  private async isDayOff(day: Date): Promise<boolean> {
    const year = String(dateFns.getYear(day));
    const holidays = await this.holidaysTracker.getHolidays(year);
    return (
      dateFns.isWeekend(day) &&
      holidays.some((item) => dateFns.isSameDay(item, day))
    );
  }

  private getFeePerHour(date: Date): number {
    const hour: number = dateFns.getHours(date);
    const minute: number = dateFns.getMinutes(date);

    if (hour == 6 && minute >= 0 && minute <= 29) return FeeRating.LOW;
    else if (hour == 6 && minute >= 30 && minute <= 59) return FeeRating.MIDDLE;
    else if (hour == 7 && minute >= 0 && minute <= 59) return FeeRating.HIGH;
    else if (hour == 8 && minute >= 0 && minute <= 29) return FeeRating.MIDDLE;
    else if (hour >= 8 && hour <= 14 && minute >= 30 && minute <= 59)
      return FeeRating.LOW;
    else if (hour == 15 && minute >= 0 && minute <= 29) return FeeRating.MIDDLE;
    else if ((hour == 15 && minute >= 0) || (hour == 16 && minute <= 59))
      return FeeRating.HIGH;
    else if (hour == 17 && minute >= 0 && minute <= 59) return FeeRating.MIDDLE;
    else if (hour == 18 && minute >= 0 && minute <= 29) return FeeRating.LOW;
    else return FeeRating.ZERO;
  }

  private getCheckInHours(checkInDate: Date, checkOutDate: Date): Date[] {
    const checkOutTime: string = dateFns.format(checkOutDate, 'HH:mm');
    const hours: Date[] = [];

    let hoursToAdd = 1;

    while (
      dateFns.format(dateFns.addHours(checkInDate, hoursToAdd), 'HH:mm') <
      checkOutTime
    ) {
      hours.push(dateFns.addHours(checkInDate, hoursToAdd));
      hoursToAdd++;
    }

    hours.push(checkOutDate);
    return hours;
  }
}
