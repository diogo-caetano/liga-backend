import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ProfessoresEntity } from 'src/Professores/professores.entity';
import { SalasEntity } from 'src/Salas/salas.entity';

export class CursosCreatedDto {

  @IsNotEmpty({
    message: 'Campo estado não pode ser vazio',
  })
  @IsNumber()
  fk_professores: ProfessoresEntity;

  @IsNotEmpty({
    message: 'Campo cidade não pode ser vazio',
  })
  @IsNumber()
  fk_salas: SalasEntity;

  @IsNotEmpty({
    message: 'Campo nome não pode ser vazio',
  })
  @IsString({
    message: 'Campo nome deve ser do tipo String',
  })
  @MinLength(1, {
    message: 'Campo Nome deve ter no minimo 1 caracter',
  })
  @MaxLength(100, {
    message: 'Campo nome deve ter no máximo 100 caracteres',
  })
  readonly nome: string;

  @IsNotEmpty({
    message: 'Campo Horárionão pode ser vazio',
  })
  readonly horario: string;

  
}

export class CursosUpdatedDto {
  @IsNotEmpty({
    message: 'Informe o código de identificação',
  })
  readonly id: number;

  @IsNotEmpty({
    message: 'Campo estado não pode ser vazio',
  })
  @IsNumber()
  fk_professores: ProfessoresEntity;

  @IsNotEmpty({
    message: 'Campo cidade não pode ser vazio',
  })
  @IsNumber()
  fk_salas: SalasEntity;

  @IsNotEmpty({
    message: 'Campo nome não pode ser vazio',
  })
  @IsString({
    message: 'Campo nome deve ser do tipo String',
  })
  @MinLength(1, {
    message: 'Campo Nome deve ter no minimo 1 caracter',
  })
  @MaxLength(100, {
    message: 'Campo nome deve ter no máximo 100 caracteres',
  })
  readonly nome: string;

  @IsNotEmpty({
    message: 'Campo Horárionão pode ser vazio',
  })
  readonly horario: string;
}

export class CursosDeleteDto {
  
  @IsNotEmpty({
    message: 'Código de identificação não informado',
  })
  @IsNumber()
  readonly id: number;

}


