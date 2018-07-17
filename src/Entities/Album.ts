import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    titulo: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    artista: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    tracklist: String[];
}