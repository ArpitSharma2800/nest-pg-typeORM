import { Test, TestingModule } from '@nestjs/testing';
import { PredatorsController } from './predators.controller';
import { PredatorsService } from './predators.service';

describe('PredatorsController', () => {
  let controller: PredatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PredatorsController],
      providers: [PredatorsService],
    }).compile();

    controller = module.get<PredatorsController>(PredatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
