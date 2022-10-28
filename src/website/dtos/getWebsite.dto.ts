import { ObjectId } from 'mongoose';

export class GetWebsiteDto {
  website_name: string;
  url: string;
  html: string;
  owner: ObjectId;
}
