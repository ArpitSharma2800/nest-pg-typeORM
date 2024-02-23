import { PartialType } from "@nestjs/mapped-types";
import { CreateStaffDocDto } from "./create-staff-doc.dto";

export class UpdateStaffDocDto extends PartialType(CreateStaffDocDto) { }