import { Vehicle } from './Vehicle';

export class Emergency extends Vehicle {
  public getType(): string {
    return 'Emergency';
  }
}
