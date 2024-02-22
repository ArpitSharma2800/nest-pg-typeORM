import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity('doctor')
export class Doctor {
    @PrimaryGeneratedColumn()
    doctorId: number

    @OneToOne(() => Staff)
    @JoinColumn()
    staff: Staff

    @Column()
    staffDesignation: string

    @Column()
    staffDepartment: string
}