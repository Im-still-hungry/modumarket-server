import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

import { JwtPayload } from '@auth/domain';
import { extractJwtPayload } from '@auth/helpers';

@Injectable()
export class JwtOrNotGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest() as Request & {
      user: JwtPayload;
    };

    try {
      const payload = extractJwtPayload(request.headers.authorization);
      if (Date.now() < payload.exp) {
        throw new UnauthorizedException('만료된 토큰입니다');
      }

      request.user = payload;
    } catch (err) {
      request.user = null;
    }

    return true;
  }
}
