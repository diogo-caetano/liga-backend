import { Injectable } from '@nestjs/common';
import { SalasEntity } from './salas.entity';
import { SalasRepository } from './salas.repository';

@Injectable()
export class SalasService {
  constructor(private repository: SalasRepository) {}

  async lista(): Promise<SalasEntity[]> {
    return await this.repository.list();
  }
}

