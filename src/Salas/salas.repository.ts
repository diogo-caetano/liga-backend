import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { SalasEntity } from './salas.entity';

@Injectable()
export class SalasRepository {
  constructor(
    @InjectRepository(SalasEntity)
    private readonly repository: Repository<SalasEntity>,
  ) {}

  async list(): Promise<SalasEntity[]> {
    return await this.repository.find();
  }

}