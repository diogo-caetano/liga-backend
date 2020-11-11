import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalasModule } from './Salas/salas.module';
import { ProfessoresModule } from './Professores/professores.module';
import { CursosModule } from './Cursos/cursos.module';
import { UsuariosModule } from './Usuarios/usuarios.module';
import { UtilsModule } from './Shared/Utils/utils.module';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [
    AuthModule,
    CursosModule,
    SalasModule,
    UsuariosModule,
    ProfessoresModule,
    UtilsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql10.freemysqlhosting.net',
      port: 3306,
      username: 'sql10375827',
      password: 'VZxNy8ceRk',
      database: 'sql10375827',
      synchronize: false,
      autoLoadEntities: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
