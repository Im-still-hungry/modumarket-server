import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateWebsiteDto } from './dtos/addWebsite.dto';
import { GetWebsiteDto } from './dtos/getWebsite.dto';
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

  async findUrl(url: string): Promise<GetWebsiteDto> {
    const result = await this.websiteModel.findOne({ url }).lean();
    return result;
  }

  async findUserOfUrl(user: ObjectId, url: string): Promise<GetWebsiteDto> {
    const result = await this.websiteModel.findOne({ url }).lean();
    return result;
  }

  async updateWebsite(url: string, html: string): Promise<boolean> {
    const result = await this.websiteModel.updateOne({ url }, { html }).lean();
    return result.acknowledged;
  }
}
