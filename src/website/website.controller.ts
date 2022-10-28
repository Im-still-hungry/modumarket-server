import { CurrentUser } from '@auth/decorators';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  Get,
  Param,
  Patch,
} from '@nestjs/common';
import { CreateWebsiteDto } from './dtos/addWebsite.dto';
import { GetWebsiteDto } from './dtos/getWebsite.dto';
import { UpdateWebsiteDto } from './dtos/updateWebsite.dto';
import { WebsiteService } from './website.service';

@Controller('website')
@UseGuards(AuthGuard())
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}

  @Post('/create')
  async createWebsite(
    @Body()
    createWebsiteDto: CreateWebsiteDto,
    @CurrentUser() user: any,
  ): Promise<CreateWebsiteDto> {
    const website = await this.websiteService.findUrl(createWebsiteDto.url);
    if (website) {
      throw new HttpException('이미 존재하는 url입니다.', HttpStatus.CONFLICT);
    }

    const newWebsite = await this.websiteService.create(createWebsiteDto);
    return newWebsite;
  }

  @Patch(':url')
  async updateWebsite(
    @Body() updateWebsiteDto: UpdateWebsiteDto,
    @CurrentUser() user: any,
  ): Promise<boolean> {
    if (user !== updateWebsiteDto.owner) {
      throw new HttpException('허용되지 않은 접근입니다.', HttpStatus.CONFLICT);
    }

    const website = await this.websiteService.findUserOfUrl(
      updateWebsiteDto.owner,
      updateWebsiteDto.url,
    );

    if (!website) {
      throw new HttpException(
        '이 유저는 URL을 갖고 있지 않습니다.',
        HttpStatus.CONFLICT,
      );
    }

    const result = await this.websiteService.updateWebsite(
      updateWebsiteDto.url,
      updateWebsiteDto.html,
    );

    return result;
  }

  @Get(':url')
  async getWebsite(@Param('url') url: string): Promise<GetWebsiteDto> {
    const website = await this.websiteService.findUrl(url);

    if (!website) {
      throw new HttpException('존재하는 url이 없습니다.', HttpStatus.CONFLICT);
    }

    return website;
  }
}
// eslint-disable-next-line @typescript-eslint/ban-types
function AuthGuard(): Function | import('@nestjs/common').CanActivate {
  throw new Error('Function not implemented.');
}
