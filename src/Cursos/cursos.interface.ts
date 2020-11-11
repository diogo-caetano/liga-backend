import { ProfessoresEntity } from "src/Professores/professores.entity";
import { SalasEntity } from "src/Salas/salas.entity";


export interface ICursosModel {
  id: number;
  fk_professores: ProfessoresEntity;
  fk_salas: SalasEntity;
  nome: string;
  horario: string;
  updated_at: Date;
  created_at: Date;
}
