import { PartialType } from '@nestjs/mapped-types';
import { CreatePredatorDto } from './create-predator.dto';

export class UpdatePredatorDto extends PartialType(CreatePredatorDto) {}
