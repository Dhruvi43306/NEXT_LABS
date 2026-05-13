import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'Email',
      passwordField: 'Password' // match your DTO field
    });
  }

  async validate(Email: string, Password: string) {
   return await this.authService.validateUser(Email, Password);
  }
}
