import { VehicleFactory, VehiclesTypes } from 'src/core/vehicle';
import { FeeCalculator } from 'src/core/feeCalculator';
import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/core/vehicle';

@Injectable()
export class FeeCalculatorService {
  constructor(
    private feeCalculator: FeeCalculator,
    private vehicleFactory: VehicleFactory,
  ) {}

  public async calculateTollFee(
    checkInDate: string,
    checkOutDate: string,
    vehicleType: string,
  ) {
    const vehicle: Vehicle = this.vehicleFactory.createVehicle(
      vehicleType as VehiclesTypes,
    );

    return this.feeCalculator.getTollFee(
      new Date(checkInDate),
      new Date(checkOutDate),
      vehicle,
    );
  }
}
