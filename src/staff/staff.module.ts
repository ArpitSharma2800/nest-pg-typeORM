import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doc.staff.entity';
import { Nurse } from './entities/nurse.staff.entity';
import { Staff } from './entities/staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Nurse, Staff])],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule { }
