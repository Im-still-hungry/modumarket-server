import { CurrentUser } from '@auth/decorators';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateWebsiteDto } from './dtos/addWebsite.dto';
import { WebsiteService } from './website.service';

@Controller('website')
// @UseGuards(AuthGuard())
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}

  @Post('/create')
  async createWebsite(
    @Body()
    createWebsiteDto: CreateWebsiteDto,
    @CurrentUser() user: any,
  ): Promise<CreateWebsiteDto> {
    const website = await this.websiteService.findUrl({
      url: createWebsiteDto.url,
    });
    if (website) {
      throw new HttpException('이미 존재하는 url입니다.', HttpStatus.CONFLICT);
    }

    const newWebsite = await this.websiteService.create(createWebsiteDto);
    return newWebsite;
  }
}
// function AuthGuard(): Function | import('@nestjs/common').CanActivate {
//   throw new Error('Function not implemented.');
// }
