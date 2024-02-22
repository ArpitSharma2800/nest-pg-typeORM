import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PredatorsService } from './predators.service';
import { CreatePredatorDto } from './dto/create-predator.dto';
import { UpdatePredatorDto } from './dto/update-predator.dto';

@Controller('predators')
export class PredatorsController {
  constructor(private readonly predatorsService: PredatorsService) {}

  @Post()
  create(@Body() createPredatorDto: CreatePredatorDto) {
    return this.predatorsService.create(createPredatorDto);
  }

  @Get()
  findAll() {
    return this.predatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.predatorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePredatorDto: UpdatePredatorDto) {
    return this.predatorsService.update(+id, updatePredatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.predatorsService.remove(+id);
  }
}
