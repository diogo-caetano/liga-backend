import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalasEntity } from './salas.entity';
import { SalasRepository } from './salas.repository';
import { SalasService } from './salas.service';

@Module({
  imports: [TypeOrmModule.forFeature([SalasEntity])],
  controllers: [],
  providers: [
    SalasService, 
    SalasRepository
  ],
  exports: [SalasService]
})
export class SalasModule {}
