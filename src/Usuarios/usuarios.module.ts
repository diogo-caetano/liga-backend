import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilsModule } from 'src/Shared/Utils/utils.module';
import { UsuariosController } from './usuarios.controller';
import { UsuariosEntity } from './usuarios.entity';
import { UsuariosRepository, UsuariosValidationRepository } from './usuarios.repository';
import { UsuariosService, UsuariosValidation } from './usuarios.service';

@Module({
    imports: [
      UtilsModule,
      TypeOrmModule.forFeature([UsuariosEntity])
    ],
    controllers: [UsuariosController],
    providers: [
      UsuariosService, 
      UsuariosRepository,
      UsuariosValidation,
      UsuariosValidationRepository
    ],
    exports: [UsuariosService,  UsuariosValidation]
})
export class UsuariosModule {}
