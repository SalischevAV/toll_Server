import { VehiclesTypes } from 'src/core/vehicle';
import { IsEnum, IsDateString } from 'class-validator';

export class RequestTollFeeData {
  @IsEnum(VehiclesTypes)
  vehicleType: string;

  @IsDateString()
  checkInDate: string;

  @IsDateString()
  checkOutDate: string;
}
