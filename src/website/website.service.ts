import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWebsiteDto } from './dtos/addWebsite.dto';
import { Website, WebsiteDocument } from './schemas/website.schema';

@Injectable()
export class WebsiteService {
  constructor(
    @InjectModel(Website.name)
    private websiteModel: Model<WebsiteDocument>,
  ) {}

  async create(createWebsiteDto: CreateWebsiteDto): Promise<Website> {
    const createdWebsite = new this.websiteModel(createWebsiteDto);
    return createdWebsite.save();
  }

  async findUrl(url: any): Promise<any> {
    const result = await this.websiteModel.findOne({ url }).lean();
    return result;
  }
}
