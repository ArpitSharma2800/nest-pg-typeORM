import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('predator')
export class Predator {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    power: string;

}
