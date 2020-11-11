import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UtilsHash } from 'src/Shared/Utils/utils.service';
import { Repository, Like } from 'typeorm';
import {
  UsuariosCreatedDto,
  UsuariosDeleteDto,
  UsuariosUpdatedDto,
  UsuariosListDto
} from './usuarios.dto';
import { UsuariosEntity } from './usuarios.entity';

@Injectable()
export class UsuariosRepository {
  constructor(
    @InjectRepository(UsuariosEntity)
    private readonly repository: Repository<UsuariosEntity>,
    private readonly hash: UtilsHash
  ) {}

  async list(body: UsuariosListDto): Promise<UsuariosEntity[]> {
    return await this.repository.find({
      where: {
        status: body.status,
      },
    });
  }

  async insert(body: UsuariosCreatedDto): Promise<UsuariosEntity> {
    const insert = new UsuariosEntity();
    insert.nome = body.nome;
    insert.email = (body.email) ? body.email : null;
    insert.senha = await this.hash.cripto(body.senha);
    insert.updated_at = null;
    insert.created_at = new Date();
    return await this.repository.save(insert);
  }

  async update(body: UsuariosUpdatedDto): Promise<UsuariosEntity> {
    const id: number = body.id;
    const update = new UsuariosEntity();
    update.nome = body.nome;
    update.email = (body.email) ? body.email : null;
    if(body.senha){ update.senha = await this.hash.cripto(body.senha) };
    update.updated_at = new Date();
    await this.repository.update({ id }, update);
    return await this.repository.findOne(id);
  }

  async delete(body: UsuariosDeleteDto): Promise<UsuariosEntity> {
    const remove = new UsuariosEntity();
    remove.id = body.id;
    const dadosRemovido = await this.repository.findOne({ id: body.id });
    await this.repository.remove(remove);
    return dadosRemovido;
  }
}


@Injectable()
export class UsuariosValidationRepository {
  
  constructor(
    @InjectRepository(UsuariosEntity)
    private readonly repository: Repository<UsuariosEntity>,
  ) {}

  /**
   * 
   *
   * @body codigo
   * Retorna dados de acordo com o código passado
   */
  async exists( nome: string): Promise<UsuariosEntity[]> {
    return await this.repository.find({ 
      where: { nome: Like(`%${nome}%`) }
    });
  }

  /**
   * 
   * @param id 
   * Retorna o Médico de acordo com o id passado
   */
  async usuariosById(id: number): Promise<UsuariosEntity[]> {
    return await this.repository.find({ where: { id } });
  }

  /**
   * 
   * @param id 
   * Retorna o Médico de acordo com o id passado
   */
  async usuariosByEmail(email: string): Promise<UsuariosEntity[]> {
    return await this.repository.find({ where: { email } });
  }

  async usuariosByEmailList(email: string): Promise<UsuariosEntity> {
    const dados =  await this.repository.findOne({ where: { email } });
    return dados;
  }


}
