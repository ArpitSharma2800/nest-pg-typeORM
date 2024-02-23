import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Doctor } from './entities/doc.staff.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDocDto } from './dto/create-staff-doc.dto/create-staff-doc.dto';
import { Staff } from './entities/staff.entity';
import { CreateStaffNurseDto } from './dto/create-staff-nurse.dto/create-staff-nurse.dto';
import { Nurse } from './entities/nurse.staff.entity';
import { UpdateStaffDocDto } from './dto/create-staff-doc.dto/update-staff-doc.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
    @InjectRepository(Nurse)
    private readonly nurseRepository: Repository<Nurse>
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

  async createNurse(createStaffNurseDto: CreateStaffNurseDto): Promise<Nurse> {
    const { staff, ...nurseData } = createStaffNurseDto;
    const newStaff = this.staffRepository.create(staff);
    const savedStaff = await this.staffRepository.save(newStaff);

    const newNurse = this.nurseRepository.create({
      ...nurseData,
      staff: savedStaff
    })

    return this.nurseRepository.save(newNurse);
  }

  create(createStaffDto: CreateStaffDto) {
    return 'This action adds a new staff';
  }

  findAll() {
    return `This action returns all staff`;
  }

  findOneDoc(id: number): Promise<Doctor> {
    const doctor = this.doctorRepository
      .createQueryBuilder('doctor')
      .leftJoinAndSelect('doctor.staff', 'staff')
      .where('doctor.doctorId = :id', { id })
      .getOneOrFail()

    return doctor;
  }

  findOneNurse(id: number): Promise<Nurse> {
    const nurse = this.nurseRepository
      .createQueryBuilder('nurse')
      .leftJoinAndSelect('nurse.staff', 'staff')
      .where('nurse.nurseId = :id', { id })
      .getOneOrFail()

    return nurse;
  }

  async update(id: number, updateDocDto: UpdateStaffDocDto): Promise<Doctor> {
    const { staff, ...docData } = updateDocDto;

    const existingDoc = await this.findOneDoc(id);

    const updatedStaff = await this.staffRepository
      .createQueryBuilder('updateStaff')
      .update(Staff)
      .set(staff)
      .where("staffId = :id", { id })
      .execute()

    const updateDoc = this.doctorRepository
      .createQueryBuilder('updateDoc')
      .update(Doctor)
      .set(docData)
      .where('doctor.doctorId = :id', { id })
      .execute()
    return `This action updates a #${id} staff`;
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
