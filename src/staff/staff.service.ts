import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Doctor } from './entities/doc.staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDocDto } from './dto/create-staff-doc.dto/create-staff-doc.dto';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) { }

  async createDoctor(createStaffDocDto: CreateStaffDocDto): Promise<Doctor> {
    const { staff, ...doctorData } = createStaffDocDto;
    const newStaff = this.staffRepository.create(staff);
    const savedStaff = await this.staffRepository.save(newStaff);

    const newDoctor = this.doctorRepository.create({
      ...doctorData,
      staff: savedStaff,
    });

    return this.doctorRepository.save(newDoctor);
  }

  create(createStaffDto: CreateStaffDto) {
    return 'This action adds a new staff';
  }

  findAll() {
    return `This action returns all staff`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staff`;
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return `This action updates a #${id} staff`;
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
