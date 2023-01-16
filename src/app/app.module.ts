import { Module } from '@nestjs/common';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ConfigModule } from '@nestjs/config';
import { FeeCalculatorModule } from './feeCalculator/feeCalculator.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    VehiclesModule,
    FeeCalculatorModule,
  ],
})
export class AppModule {}
