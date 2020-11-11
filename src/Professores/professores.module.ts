import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessoresEntity } from './professores.entity';
import { ProfessoresRepository } from './professores.repository';
import { ProfessoresService } from './professores.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessoresEntity])],
  controllers: [],
  providers: [
    ProfessoresService, 
    ProfessoresRepository
  ],
  exports: [ProfessoresService]
})
export class ProfessoresModule {}
