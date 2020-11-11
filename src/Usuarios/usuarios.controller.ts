import { Controller, Post, Put, Delete, Body } from '@nestjs/common';
import { UsuariosEntity } from './usuarios.entity';
import { UsuariosService } from './usuarios.service';
import {
  UsuariosCreatedDto,
  UsuariosUpdatedDto,
  UsuariosDeleteDto,
  UsuariosListDto,
} from './usuarios.dto';
import { UsuariosInsertPipe, UsuariosUpdatePipe, UsuariosDeletePipe } from './usuarios.pipe';

@Controller('/usuarios')
export class UsuariosController {
  constructor(private service: UsuariosService) {}

  @Post('/list')
  async list(@Body() body: UsuariosListDto): Promise<UsuariosEntity[]> {
    return await this.service.lista(body);
  }

  @Post('/insert')
  async insert(
    @Body(UsuariosInsertPipe) body: UsuariosCreatedDto,
  ): Promise<UsuariosEntity> {
    return await this.service.insert(body);
  }

  @Put('/update')
  async update(
    @Body(UsuariosUpdatePipe) body: UsuariosUpdatedDto,
  ): Promise<UsuariosEntity> {
    return await this.service.update(body);
  }

  @Delete('delete')
  async delete(@Body(UsuariosDeletePipe) body: UsuariosDeleteDto): Promise<UsuariosEntity> {
    return await this.service.delete(body);
  }
}
