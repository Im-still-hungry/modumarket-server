import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  accessSecretKey: process.env.JWT_ACCESS_SECRET_KEY,
  accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
}));
