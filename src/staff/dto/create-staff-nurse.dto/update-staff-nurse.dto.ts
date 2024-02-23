import { PartialType } from "@nestjs/mapped-types";
import { CreateStaffNurseDto } from "./create-staff-nurse.dto";

export class UpdateStaffNurseDto extends PartialType(CreateStaffNurseDto) { }