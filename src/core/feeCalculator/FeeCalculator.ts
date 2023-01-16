import { Injectable } from '@nestjs/common';
import { TimeTracker } from 'src/core/timeTracker';
import { FREE_TAX_VEHICLES_LIST, Vehicle } from 'src/core/vehicle';

@Injectable()
export class FeeCalculator {
  private freeTaxVehiclesList: Set<string> = FREE_TAX_VEHICLES_LIST;

  constructor(private readonly timeTracker: TimeTracker) {}

  public async getTollFee(
    checkInDate: Date,
    checkoutDate: Date,
    vehicle: Vehicle,
  ): Promise<number> {
    if (this.isVehicleTaxFree(vehicle)) {
      return 0;
    }
    return this.timeTracker.getTollFee(checkInDate, checkoutDate);
  }

  private isVehicleTaxFree(vehicle: Vehicle): boolean {
    return this.freeTaxVehiclesList.has(vehicle.getType());
  }
}
