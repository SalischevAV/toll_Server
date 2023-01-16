import { FeeCalculatorService } from './feeCalculator.service';
import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';
import { RequestTollFeeData } from './dto/toll-fee.dto';

@Controller('tollFee')
export class FeeCalculatorController {
  constructor(private feeCalculatorService: FeeCalculatorService) {}

  @UsePipes()
  @Post('')
  @HttpCode(200)
  public async calculateTollFee(
    @Body() body: RequestTollFeeData,
  ): Promise<number> {
    const { checkInDate, checkOutDate, vehicleType } = body;
    return this.feeCalculatorService.calculateTollFee(
      checkInDate,
      checkOutDate,
      vehicleType,
    );
  }
}
