import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import {
  CursosCreatedDto,
  CursosDeleteDto,
  CursosUpdatedDto
} from './cursos.dto';
import { CursosEntity } from './cursos.entity';

@Injectable()
export class CursosRepository {
  constructor(
    @InjectRepository(CursosEntity)
    private readonly repository: Repository<CursosEntity>,
  ) {}

  async list(): Promise<CursosEntity[]> {
    return await this.repository.find({
      relations: ['fk_professores','fk_salas']
    });
  }

  async lista_update(body: any): Promise<CursosEntity> {
    return await this.repository.findOne({
      relations: ['fk_professores','fk_salas'],
      where: { id: body.id }
    });
  }

  async insert(body: CursosCreatedDto): Promise<CursosEntity> {
    const insert = new CursosEntity();
    insert.fk_professores = body.fk_professores;
    insert.fk_salas = body.fk_salas;
    insert.nome = body.nome;
    insert.horario = body.horario;
    insert.updated_at = null;
    insert.created_at = new Date();
    return await this.repository.save(insert);
  }

  async update(body: CursosUpdatedDto): Promise<CursosEntity> {
    const id: number = body.id;
    const update = new CursosEntity();
    update.fk_professores = body.fk_professores;
    update.fk_salas = body.fk_salas;
    update.nome = body.nome;
    update.horario = body.horario;
    update.updated_at = new Date();
    await this.repository.update({ id }, update);
    const dados = await this.repository.findOne(id);
    if(dados)
      return dados;
    else
      return null
  }

  async delete(body: CursosDeleteDto): Promise<CursosEntity> {
    const remove = new CursosEntity();
    remove.id = body.id;
    const dadosRemovido = await this.repository.findOne({ id: body.id });
    await this.repository.remove(remove);
    return dadosRemovido;
  }
}


@Injectable()
export class CursosValidationRepository {
  
  constructor(
    @InjectRepository(CursosEntity)
    private readonly repository: Repository<CursosEntity>,
  ) {}

  /**
   * 
   *
   * @body codigo
   * Retorna dados de acordo com o código passado
   */
  async exists( nome: string): Promise<CursosEntity[]> {
    return await this.repository.find({ 
      where: { nome: Like(`%${nome}%`) }
    });
  }

  /**
   * 
   * @param id 
   * Retorna o Médico de acordo com o id passado
   */
  async CursosById(id: number): Promise<CursosEntity[]> {
    return await this.repository.find({ where: { id } });
  }

  /**
   * 
   * @param crm
   * Retorna médico de acordo com o crm passado
   */
  async existsCrm(crm: string): Promise<CursosEntity[]> {
    return await this.repository.find({ 
      where: { crm }
    });
  }

  /**
   * 
   * @param fk_especialidade
   * Retorna o Médico de acordo com o id passado
   */
  async CursosEspecialidadeById(id: number): Promise<CursosEntity[]> {
   
    const medico =  await this.repository.find({ where: { fk_adm_especialidade: id } });
    return medico
  }

   /**
   * 
   * @param codigo_antigo
   * @param codigo
   * Retorna o médico de acordo com o id passado
   */
  async CursosMesmoCrmUpdate(crm: string,  crm_antigo: string): Promise<boolean> {
    
    if(crm === crm_antigo)
      return false
    else{
      const Cursos = await this.repository.find({ 
        where: {  crm }
      });
      if(Cursos.length > 0)
        return true
      else
        return false
    }
    
    
  }


  /**
   * 
   * @param id 
   * @param crm
   * Retorna o médico de acordo com o id e crm passado
   */
  async CursosByIdCrm(crm: string, id: number): Promise<CursosEntity[]> {
    return await this.repository.find({ where: { id, crm } });
  }




}
