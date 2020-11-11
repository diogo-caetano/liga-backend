import { Body, Injectable } from '@nestjs/common';
import { CursosEntity } from './cursos.entity';
import { CursosRepository, CursosValidationRepository } from './cursos.repository';
import {
  CursosCreatedDto,
  CursosDeleteDto,
  CursosUpdatedDto
} from './cursos.dto';

@Injectable()
export class CursosService {
  constructor(private repository: CursosRepository) {}

  async lista(): Promise<CursosEntity[]> {
    return await this.repository.list();
  }

  async lista_update(body: any): Promise<CursosEntity> {
    return await this.repository.lista_update(body);
  }

  async insert(
    @Body() body: CursosCreatedDto,
  ): Promise<CursosEntity> {
    try {
      return await this.repository.insert(body);
    } catch (error) {
      return error;
    }
  }
  async update(
    @Body() body: CursosUpdatedDto,
  ): Promise<CursosEntity> {
    try {
      return await this.repository.update(body);
    } catch (error) {
      return error;
    }
  }
  async delete(@Body() body: CursosDeleteDto): Promise<CursosEntity> {
    try {
      return await this.repository.delete(body);
    } catch (error) {
      return error;
    }
  }
}

@Injectable()
export class CursosValidation {
  constructor(private repository: CursosValidationRepository) {}

  /**
   * Verifica se o Cursosexiste no banco de dados com o mesmo nome
   */
  async CursosExists(nome: string): Promise<boolean> {
    try {
      const Cursos = await this.repository.exists(nome)

      return (Cursos.length > 0) ? true :  false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verifica se o centro de custo existe no banco de acordo com o ID
   */
  async CursosById(id: number): Promise<boolean> {
    try {
      const Cursos = await this.repository.CursosById(id)

      return (Cursos.length > 0) ? true :  false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verifica se existe médico com a especialidade no banco de acordo com o fk_especialidade
   */
  async CursosEspecialidadeById(id: number): Promise<boolean> {
    try {
      const medicoEspecialidade = await this.repository.CursosEspecialidadeById(id)
      return (medicoEspecialidade.length > 0) ? true :  false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verifica se o centro de custo existe no banco de acordo com o ID
   */
  async CursosExistsCrm(crm: string): Promise<boolean> {
    try {
      const Cursos = await this.repository.existsCrm(crm)
      return (Cursos.length > 0) ? true :  false;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verifica se o centro de custo existe no banco de acordo com o ID
   */
  async CursosByIdCrm(crm: string, id: number): Promise<boolean> {
    try {
      const Cursos = await this.repository.CursosByIdCrm(crm, id)
      return (Cursos.length > 0) ? true :  false;
    } catch (error) {
      return error;
    }
  }


  /**
   * Verifica se o médico existe no banco de acordo com o CRM
   */
  async CursosMesmoCrmUpdate(crm: string, crm_antigo: string): Promise<boolean> {
    try {
      return await this.repository.CursosMesmoCrmUpdate(crm, crm_antigo)
    } catch (error) {
      return error;
    }
  }
}

@Injectable()
export class CursosPermissoes {

  permissoes(): any {
    try {
      const permissoes = {
        CENTRO_CUSTO: "CENTRO_CUSTO",
        CENTRO_CUSTO_CADASTRAR: "CENTRO_CUSTO.CADASTRAR",
        CENTRO_CUSTO_ALTERAR: "CENTRO_CUSTO.ALTERAR",
        CENTRO_CUSTO_EXCLUIR: "CENTRO_CUSTO.EXCLUIR"
      }
      return permissoes;
    } catch (error) {
      return error;
    }
  }


}