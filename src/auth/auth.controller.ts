import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';

import { JwtToken } from './domain';

import { AuthService } from './auth.service';
import { CreateUserDto } from '@user/dtos/create.dto';
import { UserService } from '@user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  async register(
    @Body()
    createUserDto: CreateUserDto,
  ): Promise<JwtToken> {
    const user = await this.userService.findOne({
      kakaoCode: createUserDto.kakaoCode,
    });
    if (user) {
      return this.authService.createToken(user.email);
    }

    const newUser = await this.userService.create(createUserDto);
    return this.authService.createToken(newUser.email);
  }

  @Post('/sign-in')
  async login(
    @Body()
    createUserDto: Pick<CreateUserDto, 'kakaoCode' | 'email'>,
  ): Promise<JwtToken> {
    const user = await this.userService.findOne({
      kakaoCode: createUserDto.kakaoCode,
    });
    if (!user) {
      throw new HttpException(
        '가입 내역이 없습니다. 다시 한 번 확인해 주세요.',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.authService.createToken(user.email);
  }
}
