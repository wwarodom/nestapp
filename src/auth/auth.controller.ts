import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth') //localhost:3000/auth
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/regist') // localhost:3000/auth/regist
  @HttpCode(201) // show code 201, when register complete
  async register(@Body() registerDto: RegisterDto) {
    await this.authService.register(registerDto);
    return {
      message: 'Register Complete',
    };
  }

  @Post('/login') // localhost:3000/auth/login
  @HttpCode(200) // show code 200, when login complete
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard) // protect route and check token
  @Get('/profile') // localhost:3000/auth/profile
  async getProfile(@Request() req: any) {
    return await this.authService.getUsertProfile(Number(req.user.user_id));
  }
}
