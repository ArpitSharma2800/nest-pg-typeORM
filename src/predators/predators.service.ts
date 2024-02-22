import { Injectable } from '@nestjs/common';
import { CreatePredatorDto } from './dto/create-predator.dto';
import { UpdatePredatorDto } from './dto/update-predator.dto';

@Injectable()
export class PredatorsService {
  create(createPredatorDto: CreatePredatorDto) {
    return 'This action adds a new predator';
  }

  findAll() {
    return `This action returns all predators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} predator`;
  }

  update(id: number, updatePredatorDto: UpdatePredatorDto) {
    return `This action updates a #${id} predator`;
  }

  remove(id: number) {
    return `This action removes a #${id} predator`;
  }
}
