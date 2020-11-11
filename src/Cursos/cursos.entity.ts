import { ProfessoresEntity } from 'src/Professores/professores.entity';
import { SalasEntity } from 'src/Salas/salas.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { ICursosModel } from './cursos.interface';

@Entity({ name: 'cursos' })
export class CursosEntity extends BaseEntity implements ICursosModel {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    () => ProfessoresEntity,
    professores => professores.id,
  )
  @JoinColumn({ name: 'fk_professores' })
  fk_professores: ProfessoresEntity;

  @OneToOne(
    () => SalasEntity,
    salas => salas.id,
  )
  @JoinColumn({ name: 'fk_salas' })
  fk_salas: SalasEntity;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  nome: string;

  @Column({ type: 'time', nullable: false })
  horario: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
}
