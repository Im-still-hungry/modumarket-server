import { JwtConfigModule } from '@config/jwt';
import { Module } from '@nestjs/common';
import { UserModule } from '@user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule, JwtConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
