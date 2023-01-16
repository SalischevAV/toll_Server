import { VehiclesTypes } from '../../core/vehicle';
import { Injectable } from '@nestjs/common';
import { FREE_TAX_VEHICLES_LIST } from 'src/core/vehicle';

@Injectable()
export class VehiclesService {
  public getTaxFreeTypes() {
    return Array.from(FREE_TAX_VEHICLES_LIST);
  }

  public getVehicleTypes() {
    return VehiclesTypes;
  }
}
