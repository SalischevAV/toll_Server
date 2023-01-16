import { VehiclesService } from './vehicles.service';
import { Controller, Get } from '@nestjs/common';

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehicleService: VehiclesService) {}

  @Get('/getVehicleTypes')
  public getVehicleTypes() {
    return this.vehicleService.getVehicleTypes();
  }

  @Get('/getTaxFreeTypes')
  public getTaxFreeTypes() {
    return this.vehicleService.getTaxFreeTypes();
  }
}
