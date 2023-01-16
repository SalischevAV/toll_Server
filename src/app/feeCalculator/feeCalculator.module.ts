import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TimeTracker } from 'src/core/timeTracker';
import { FeeCalculator } from 'src/core/feeCalculator';
import { HolidaysTracker } from 'src/core/holidaysTracker';
import { VehicleFactory } from 'src/core/vehicle';
import { FeeCalculatorController } from './feeCalculator.controller';
import { FeeCalculatorService } from './feeCalculator.service';

@Module({
  controllers: [FeeCalculatorController],
  providers: [
    FeeCalculatorService,
    VehicleFactory,
    FeeCalculator,
    HolidaysTracker,
    TimeTracker,
  ],
  imports: [HttpModule],
})
export class FeeCalculatorModule {}
