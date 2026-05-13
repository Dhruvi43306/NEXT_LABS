import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from './auth/entities/auth.entity/auth.entity';
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      database:'testing_login_demo',
      username:'root',
      password:'',
      port:3306,
      entities:[AuthEntity],
      synchronize:true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
