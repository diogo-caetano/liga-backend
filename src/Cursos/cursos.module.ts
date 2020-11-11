import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessoresModule } from 'src/Professores/professores.module';
import { SalasModule } from 'src/Salas/salas.module';
import { CursosController } from './cursos.controller';
import { CursosEntity } from './cursos.entity';
import { CursosRepository, CursosValidationRepository } from './cursos.repository';
import { CursosService, CursosValidation } from './cursos.service';

@Module({
  imports: [
    ProfessoresModule,
    SalasModule,
    TypeOrmModule.forFeature([CursosEntity]),
  ],
  controllers: [CursosController],
  providers: [
    CursosService, 
    CursosValidation, 
    CursosValidationRepository,
    CursosRepository
  ],
  exports: [CursosValidation]
})
export class CursosModule {}
