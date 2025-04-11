/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello() {
    return { message :'NestJS with MVC'};
  }

  getName(): string {
    return 'Kittasil Silanon';
  }

  getJson() {
    return {
      name: 'kittasil',
      lastname: 'silanon',
      age: 39,
      version : process.env.API_VERSION,
    };
  }
  getJson2() {
    return {
      name: 'kittasil2',
      lastname: 'silanon2',
      age: 40,
    };
  }
}
