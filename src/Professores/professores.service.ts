import { Injectable } from '@nestjs/common';
import { ProfessoresEntity } from './professores.entity';
import { ProfessoresRepository } from './professores.repository';

@Injectable()
export class ProfessoresService {
  constructor(private repository: ProfessoresRepository) {}

  async lista(): Promise<ProfessoresEntity[]> {
    return await this.repository.list();
  }
}

