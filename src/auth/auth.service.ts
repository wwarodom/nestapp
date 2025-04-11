/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';
import { RegisterDto } from './dto/register.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(AuthUser)
    private readonly authUserModel: typeof AuthUser,
    private jwtService : JwtService,
  ) {}

  // register 
  async register(registerDto: RegisterDto) {
    // check email
    const authuser = await this.authUserModel.findOne({
      where: { email: registerDto.email },
    });
    if (authuser) {
      throw new BadRequestException(
        'This email already exists. Please try again.',
      );
    }
    // encrypt password (salt and hash)
    const salt = await genSalt(10);
    const hashPassword = await hash(registerDto.password, salt);
    // insert data into table
    const newUser = await this.authUserModel.create({
        username : registerDto.username,
        email : registerDto.email,
        password : hashPassword,
    });
    return newUser;
  }

  // login
  async login(loginDto: LoginDto){
    
     // check email
     const authuser = await this.authUserModel.findOne({
      where: { email: loginDto.email },
    });
    if (!authuser) {
      throw new UnauthorizedException(
        // The HTTP response status code will be 401.
        'This email does not exist. Please try again.',
      );
    }

    // compare password( data string, encrpyt string)
    const isValid = await compare(loginDto.password, authuser.password);
    if ( !isValid ) {
        throw new UnauthorizedException("error password!!!");
    }
    
    // generate JWT token
    // payload contains the claims or the data being transferred (id).
    const payload = { user_id: authuser.id };
    const token = await this.jwtService.signAsync( payload, { 
      secret : process.env.JWT_SECRET_KEY 
    });
    
    return { access_token: token };
  }

  async getUsertProfile(id: number){
    return await this.authUserModel.findByPk(id, {
      attributes: ['id', 'username', 'email'],
    });
  }
}


