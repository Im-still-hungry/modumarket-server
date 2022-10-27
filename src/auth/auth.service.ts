import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { JwtConfigService } from '@config/jwt';

import { JwtPayload, JwtToken } from './domain';

@Injectable()
export class AuthService {
  constructor(private readonly jwtConfig: JwtConfigService) {}

  createToken(email: string): JwtToken {
    const payload: Pick<JwtPayload, 'sub'> = {
      sub: email,
    };

    return {
      access: jwt.sign(payload, this.jwtConfig.accessSecretKey, {
        expiresIn: this.jwtConfig.accessExpiresIn,
      }),
    };
  }
}
