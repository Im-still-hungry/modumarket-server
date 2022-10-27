import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly kakaoCode: string;
  @IsString()
  readonly email: string;
}
