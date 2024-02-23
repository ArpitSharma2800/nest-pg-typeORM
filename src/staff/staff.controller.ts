import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { CreateStaffDocDto } from './dto/create-staff-doc.dto/create-staff-doc.dto';
import { CreateStaffNurseDto } from './dto/create-staff-nurse.dto/create-staff-nurse.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) { }

  @Post('createDoc')
  createDoc(@Body() createStaffDocDto: CreateStaffDocDto) {
    return this.staffService.createDoctor(createStaffDocDto);
  }

  @Post('createNurse')
  createNurse(@Body() createStaffNurseDto: CreateStaffNurseDto) {
    return this.staffService.createNurse(createStaffNurseDto);
  }

  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @Get('/doc/:id')
  findOneDoc(@Param('id') id: string) {
    return this.staffService.findOneDoc(+id);
  }

  @Get('/nurse/:id')
  findOneNurse(@Param('id') id: string) {
    return this.staffService.findOneNurse(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(+id, updateStaffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(+id);
  }
}
