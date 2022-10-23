import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWebsiteDto } from './dtos/website.dto';
import { Website, WebsiteDocument } from './schemas/website.schema';

@Injectable()
export class WebsiteService {
  constructor(
    @InjectModel(Website.website_name)
    private websiteModel: Model<WebsiteDocument>,
  ) {}

  async create(createWebsiteDto: CreateWebsiteDto): Promise<Website> {
    const createdWebsite = new this.websiteModel(createWebsiteDto);
    return createdWebsite.save();
  }

  async findOne(url: any): Promise<WebsiteSchema> {
    const createdWebsite = new this.websiteModel(createWebsiteDto);
    return createdWebsite.save();
  }
}
