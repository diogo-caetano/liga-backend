import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';
import { IUsuariosModel } from './usuarios.interface';

@Entity({ name: 'usuarios' })
export class UsuariosEntity extends BaseEntity implements IUsuariosModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  nome: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  senha: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
}
