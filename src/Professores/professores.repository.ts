import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { ProfessoresEntity } from './professores.entity';

@Injectable()
export class ProfessoresRepository {
  constructor(
    @InjectRepository(ProfessoresEntity)
    private readonly repository: Repository<ProfessoresEntity>,
  ) {}

  async list(): Promise<ProfessoresEntity[]> {
    return await this.repository.find();
  }

}