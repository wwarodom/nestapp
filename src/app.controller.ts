import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // localhost:3000
  @Render('index') // the return value of the route handler method is passed to the template for rendering.
  getHello() {
    return this.appService.getHello();
  }

  @Get('/showname') // localhost:3000/showname
  getName(): string {
    return this.appService.getName();
  }

  @Get('/showjson') // localhost:3000/showjson
  getJson() {
    return this.appService.getJson();
  }

  @Get('/Showjson2') // localhost:3000/showjson2
  getJson2() {
    return this.appService.getJson2();
  }
}
