import { Body, Injectable } from '@nestjs/common';
import { UsuariosEntity } from './usuarios.entity';
import { UsuariosRepository, UsuariosValidationRepository } from './usuarios.repository';
import {
  UsuariosCreatedDto,
  UsuariosDeleteDto,
  UsuariosUpdatedDto,
  UsuariosListDto
} from './usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(private repository: UsuariosRepository) {}

  async lista(body: UsuariosListDto): Promise<UsuariosEntity[]> {
    return await this.repository.list(body);
  }
  async insert(
    @Body() body: UsuariosCreatedDto,
  ): Promise<UsuariosEntity> {
    try {
      return await this.repository.insert(body);
    } catch (error) {
      return error;
    }
  }
  async update(
    @Body() body: UsuariosUpdatedDto,
  ): Promise<UsuariosEntity> {
    try {
      return await this.repository.update(body);
    } catch (error) {
      return error;
    }
  }
  async delete(@Body() body: UsuariosDeleteDto): Promise<UsuariosEntity> {
    try {
      return await this.repository.delete(body);
    } catch (error) {
      return error;
    }
  }
}

@Injectable()
export class UsuariosValidation {
  constructor(private repository: UsuariosValidationRepository) {}

  /**
   * Verifica se o Usuariosexiste no banco de dados com o mesmo nome
   */
  async UsuariosExists(nome: string): Promise<boolean> {
    try {
      const Usuarios = await this.repository.exists(nome)

      return (Usuarios.length > 0) ? true :  false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verifica se o centro de custo existe no banco de acordo com o ID
   */
  async usuariosById(id: number): Promise<boolean> {
    try {
      const Usuarios = await this.repository.usuariosById(id)

      return (Usuarios.length > 0) ? true :  false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verifica se o usuário existe de acordo com o e-mail
   */
  async usuariosByEmail(email: string): Promise<boolean> {
    try {
      const usuarios = await this.repository.usuariosByEmail(email)

      return (usuarios.length > 0) ? true :  false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verifica se o usuário existe de acordo com o e-mail
   */
  async usuariosByEmailList(email: string): Promise<UsuariosEntity> {
    try {
      const usuarios = await this.repository.usuariosByEmailList(email)

      return usuarios;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verifica se o usuário existe de acordo com o e-mail
   */
  async usuariosByMesmoEmail(email: string, email_antigo: string): Promise<boolean> {
    try {
      if(email === email_antigo){
        return false
      }
      else{
        const usuarios = await this.repository.usuariosByEmail(email)
        return (usuarios.length > 0) ? true :  false;
      }
      
    } catch (error) {
      return error;
    }
  }
}

