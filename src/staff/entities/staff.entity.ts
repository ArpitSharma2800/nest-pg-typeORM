import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { genderType } from "./enum/staff.enum";
import { Doctor } from "./doc.staff.entity";

@Entity('Staff')
export class Staff {
    @PrimaryGeneratedColumn()
    staffId: number

    @Column()
    staffName: string

    @Column()
    staffAge: number

    @Column({
        type: 'enum',
        enum: genderType,
        default: genderType.M
    })
    staffGender: genderType

}
