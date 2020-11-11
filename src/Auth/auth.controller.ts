import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from "./local-auth.guard";
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() request: any) {
    return this.authService.login(request.user)
  }

}
