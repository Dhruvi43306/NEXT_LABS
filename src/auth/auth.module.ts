import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from './entities/auth.entity/auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy/jwt.strategy';

@Module({
  imports:[TypeOrmModule.forFeature([AuthEntity]),
   PassportModule,
   JwtModule.register({
      secret:'shhhhhh',
      signOptions:{expiresIn : '1h'},
   }),
],
 
  controllers: [AuthController],
  providers: [AuthService,
    LocalStrategy,
    JwtStrategy
  ]
})
export class AuthModule {}
