import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'shhhhhh',
    });
  }

  async validate(payload: any) {
  if (!payload) {
    throw new UnauthorizedException('User not found');
  }
    return {
      userId: payload.sub,
      email: payload.email,
      role:payload.Role
    };
  }
}
