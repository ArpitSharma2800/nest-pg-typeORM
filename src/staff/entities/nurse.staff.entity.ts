import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Staff } from "./staff.entity";

@Entity('nurse')
export class Nurse {
    @PrimaryGeneratedColumn()
    nurseId: number

    @OneToOne(() => Staff)
    @JoinColumn()
    staff: Staff

    @Column()
    staffDesignation: string

    @Column()
    staffDepartment: string
}