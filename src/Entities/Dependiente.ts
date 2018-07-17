import { Cliente } from "./Cliente";
import { Entity, Column } from "typeorm";

@Entity()
export class Dependiente extends Cliente{

    @Column()
    salario: number;
}