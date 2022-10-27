export class JwtPayload {
  /** _id가 안찍혀서 그냥 email */
  sub: string;
  /** 토큰이 발급된 시간 (issued at) */
  iat: number;
  /** expiration date */
  exp: number;
}
