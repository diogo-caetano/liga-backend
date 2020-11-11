import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { UtilsHash } from 'src/Shared/Utils/utils.service';
import { UsuariosValidation } from './usuarios.service';



/**
 * 
 * Verificar se Estado existe
 * Verificar se Cidade existe
 * Verificar se especialidade existe
 * verificar se existe CRM já cadastrado
 */
@Injectable()
export class UsuariosInsertPipe implements PipeTransform {
  constructor(
    private usuariosValidation: UsuariosValidation,
    private utils: UtilsHash
    ){}

  async transform(data: any){
   
    const usuariosByEmail = await this.usuariosValidation.usuariosByEmail(data.email)

    if(usuariosByEmail === true)
        throw new BadRequestException("E-mail já xiste em nossa base de dados")

    if(data.senha !== data.repetir_senha)
      throw new BadRequestException("Senha e repetir senha devem ser iguais")
    

    return data
  }
}

/**
 * 
 * Verifica se fornecedor existe através do ID e CNPJ
 * Verificar se Estado existe
 * Verificar se Cidade existe
 */
@Injectable()
export class UsuariosUpdatePipe implements PipeTransform {
  constructor(
    private usuariosValidation: UsuariosValidation
    ){}

  async transform(data: any){
   
    const UsuariosById = await this.usuariosValidation.usuariosById(data.id)

    if(UsuariosById === false)
        throw new BadRequestException("Usuário não existe")

    const UsuariosByMesmoEmail = await this.usuariosValidation.usuariosByMesmoEmail(data.email, data.email_antigo)

    if(UsuariosByMesmoEmail === true)
        throw new BadRequestException("Usuário já existe")
        
    
    return data
  }
}


/**
 * 
 * Verifica se usuário existe através do ID 
 */
@Injectable()
export class UsuariosDeletePipe implements PipeTransform {
  constructor(
    private usuariosValidation: UsuariosValidation
    ){}

  async transform(data: any){
    const UsuariosById = await this.usuariosValidation.usuariosById(data.id)

    if(UsuariosById === false)
        throw new BadRequestException("Usuário não existe")

    return data
  }
}