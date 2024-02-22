import { Module } from '@nestjs/common';
import { PredatorsService } from './predators.service';
import { PredatorsController } from './predators.controller';

@Module({
  controllers: [PredatorsController],
  providers: [PredatorsService],
})
export class PredatorsModule {}
