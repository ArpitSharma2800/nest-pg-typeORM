import { Test, TestingModule } from '@nestjs/testing';
import { PredatorsService } from './predators.service';

describe('PredatorsService', () => {
  let service: PredatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredatorsService],
    }).compile();

    service = module.get<PredatorsService>(PredatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
