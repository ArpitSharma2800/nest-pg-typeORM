import { genderType } from "../entities/enum/staff.enum";


export class CreateStaffDto {
    staffName: string;
    staffAge: number;
    sttaffGender: genderType
}
