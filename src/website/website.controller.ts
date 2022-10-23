import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateWebsiteDto } from './dtos/website.dto';
import { WebsiteService } from './website.service';

@Controller('website')
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}

  @Post('/create')
  async create(
    @Body()
    body: CreateWebsiteDto,
  ): Promise<CreateWebsiteDto> {
    const website = await this.websiteService.findOne({
      url: body.url,
    });
    if (website) {
      throw new HttpException('이미 존재하는 url입니다.', HttpStatus.CONFLICT);
    }

    const newWebsite = await this.websiteService.create(...body, owner);
    return newWebsite;
  }
}
