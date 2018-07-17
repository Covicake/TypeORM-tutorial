import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50,
    })
    nombre: string;
     
    @Column({
        type: 'varchar',
        nullable: false
    })
    apellido: string;
}