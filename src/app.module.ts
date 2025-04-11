/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { Customer } from './customer/entities/customer.entity';
import { AuthModule } from './auth/auth.module';
import { AuthUser } from './auth/entities/auth.entity';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect : process.env.DB_DIALECT as Dialect,
      host : process.env.DB_HOST,
      port : Number(process.env.DB_PORT),
      username : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      models : [Customer,AuthUser, Todo],
      autoLoadModels: true, 
      // sync: {force: true},
      sync: {alter: true},
    }),
    ProductModule,
    UtilityModule,
    GlobalHelperModule,
    CustomerModule,
    TodoModule,
    AuthModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
