import { Injectable } from '@nestjs/common';
import {
  Ambulance,
  Car,
  Motorbike,
  Track,
  Tractor,
  Van,
  Military,
  Emergency,
  VehiclesTypes,
} from './';

@Injectable()
export class VehicleFactory {
  public createVehicle(vehicleType: VehiclesTypes) {
    switch (vehicleType) {
      case VehiclesTypes.AMBULANCE:
        return new Ambulance();
      case VehiclesTypes.CAR:
        return new Car();
      case VehiclesTypes.EMERGENCY:
        return new Emergency();
      case VehiclesTypes.MILITARY:
        return new Military();
      case VehiclesTypes.MOTORBIKE:
        return new Motorbike();
      case VehiclesTypes.TRACK:
        return new Track();
      case VehiclesTypes.TRACTOR:
        return new Tractor();
      case VehiclesTypes.VAN:
        return new Van();
    }
  }
}
