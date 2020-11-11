import { Injectable } from '@nestjs/common';
import { UtilsHash } from 'src/Shared/Utils/utils.service';
import { UsuariosValidation } from 'src/Usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private usuariosService: UsuariosValidation,
    private utilsHash: UtilsHash,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, senha: string){
    const user = await this.usuariosService.usuariosByEmailList(email);
    if (user) {

      const compare = await this.utilsHash.comparaCripto(senha, user.senha)
      if(compare)
      {
        const { id,  nome,email } = user;
        return { id, nome, email };
      }
    }
      
      return null

  }

  async login(user: any) {
    const payload = { id: user.id, email: user.email, nome: user.nome}
    return { access_token: this.jwtService.sign(payload)}
  }


}
