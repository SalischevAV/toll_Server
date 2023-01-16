import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { Countries, HOLIDAY_API_URL } from './constants';
import { Holiday } from './holiday.interface';

@Injectable()
export class HolidaysTracker {
  constructor(private readonly httpService: HttpService) {}

  public async getHolidays(
    year: string,
    country: Countries = Countries.SWE,
  ): Promise<Date[]> {
    return await this.httpService
      .get(
        `${HOLIDAY_API_URL}?country=${country}&key=${process.env.HOLIDAY_API_KEY}&year=${year}`,
      )
      .toPromise()
      .then((res) => res?.data)
      .then((data) => data.holidays.map((item: Holiday) => new Date(item.date)))
      .catch((err) => console.log(err));
  }
}
