import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
