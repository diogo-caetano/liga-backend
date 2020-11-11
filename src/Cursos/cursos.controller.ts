import { Controller, Post, Put, Delete, Body, UseGuards, Get } from '@nestjs/common';
import { CursosEntity } from './cursos.entity';
import { CursosService } from './cursos.service';
import { JwtAuthGuard } from './../Auth/jwt-auth.guard'
import {
  CursosCreatedDto,
  CursosUpdatedDto,
  CursosDeleteDto
} from './cursos.dto';
import { ProfessoresService } from 'src/Professores/professores.service';
import { SalasService } from 'src/Salas/salas.service';

@Controller('/cursos')
export class CursosController {
  constructor(
    private service: CursosService,
    private professoresService: ProfessoresService,
    private salasService: SalasService
    ) {}

 
  @UseGuards(JwtAuthGuard) 
  @Post('/list')
  async list(): Promise<CursosEntity[]> {
    return await this.service.lista();
  }

  @UseGuards(JwtAuthGuard) 
  @Post('/insert')
  async insert(
    @Body() body: CursosCreatedDto,
  ): Promise<CursosEntity> {
    return await this.service.insert(body);
  }

  @UseGuards(JwtAuthGuard) 
  @Put('/update')
  async update(
    @Body() body: CursosUpdatedDto,
  ): Promise<CursosEntity> {
    return await this.service.update(body);
  }

  @UseGuards(JwtAuthGuard) 
  @Delete('delete')
  async delete(@Body() body: CursosDeleteDto): Promise<CursosEntity> {
    return await this.service.delete(body);
  }


  @UseGuards(JwtAuthGuard) 
  @Post('/update/content')
  async update_content(@Body() body: any): Promise<CursosEntity> {
    return await this.service.lista_update(body);
  }

  @UseGuards(JwtAuthGuard) 
  @Get('/professores_salas')
  async get_professores_cursos(): Promise<any> {
    const professores = await this.professoresService.lista();
    const salas = await this.salasService.lista();

    return {
      professores: professores,
      salas: salas
    }
  }
}
