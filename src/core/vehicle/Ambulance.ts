import { Vehicle } from './Vehicle';

export class Ambulance extends Vehicle {
  public getType(): string {
    return 'Ambulance';
  }
}
