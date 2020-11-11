import {
  Contains,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';


export class UsuariosListDto {
 
  @IsIn(['ATIVADO', 'DESATIVADO'], {
    message: 'Campo Status com valor inválido',
  })
  readonly status: string;

}

export class UsuariosCreatedDto {

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
    message: 'Campo e-mail não pode ser vazio',
  })
  @IsString({
    message: 'Campo e-mail deve ser do tipo String',
  })
  @MinLength(1, {
    message: 'Campo E-mail deve ter no minimo 1 caracter',
  })
  @MaxLength(100, {
    message: 'Campo E-mail deve ter no máximo 100 caracteres',
  })
  @Contains("@", {
    message: 'Campo E-mail inválido'
  })
  readonly email: string;

  @IsNotEmpty({
    message: 'Campo senha não pode ser vazio',
  })
  @IsString({
    message: 'Campo senha deve ser do tipo String',
  })
  @MinLength(1, {
    message: 'Campo senha deve ter no minimo 1 caracter',
  })
  @MaxLength(100, {
    message: 'Campo senha deve ter no máximo 10 caracteres',
  })
  readonly senha: string;

  @IsNotEmpty({
    message: 'Campo repetir senha não pode ser vazio',
  })
  @IsString({
    message: 'Campo repetir senha deve ser do tipo String',
  })
  @MinLength(1, {
    message: 'Campo repetir senha deve ter no minimo 1 caracter',
  })
  @MaxLength(100, {
    message: 'Campo repetir senha deve ter no máximo 10 caracteres',
  })
  readonly repetir_senha: string;

  @IsIn(['CRIARTI', 'MASTER', 'NORMAL'], {
    message: 'Campo nível com valor inválido',
  })
  readonly nivel: string;

  @IsNotEmpty({
    message: 'Campo status não deve ser vazio',
  })
  @IsIn(['ATIVADO', 'DESATIVADO'], {
    message: 'Campo Status com valor inválido',
  })
  readonly status: string;

  readonly descricao: string;
  readonly redefinir_senha_token: string;
  readonly redefinir_senha_validade: string;

}

export class UsuariosUpdatedDto {
  
  @IsNotEmpty({
    message: 'Informe o código de identificação',
  })
  readonly id: number;

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
    message: 'Campo e-mail não pode ser vazio',
  })
  @IsString({
    message: 'Campo e-mail deve ser do tipo String',
  })
  @MinLength(1, {
    message: 'Campo E-mail deve ter no minimo 1 caracter',
  })
  @MaxLength(100, {
    message: 'Campo E-mail deve ter no máximo 100 caracteres',
  })
  @Contains("@", {
    message: 'Campo E-mail inválido'
  })
  readonly email: string;


  @ValidateIf(o => o.senha === "")
  @IsNotEmpty({
    message: 'Campo senha não pode ser vazio',
  })
  @IsString({
    message: 'Campo senha deve ser do tipo String',
  })
  @MinLength(1, {
    message: 'Campo senha deve ter no minimo 1 caracter',
  })
  @MaxLength(100, {
    message: 'Campo senha deve ter no máximo 10 caracteres',
  })
  readonly senha: string;


  @IsIn(['CRIARTI', 'MASTER', 'NORMAL'], {
    message: 'Campo nível com valor inválido',
  })
  readonly nivel: string;

  @IsNotEmpty({
    message: 'Campo status não deve ser vazio',
  })
  @IsIn(['ATIVADO', 'DESATIVADO'], {
    message: 'Campo Status com valor inválido',
  })
  readonly status: string;

  readonly descricao: string;
  readonly redefinir_senha_token: string;
  readonly redefinir_senha_validade: string;
}

export class UsuariosDeleteDto {
  @IsNotEmpty({
    message: 'Código de identificação não informado',
  })
  @IsNumber()
  readonly id: number;

}
