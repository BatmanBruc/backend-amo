import { Result } from './../types';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('get_api')
  async get_api(@Body('id') id: string, @Res() res: Response): Promise<void> {
    const result = await this.authService.apiAuth(id);
    res.status(result.status);
    res.send(result);
  }
}
