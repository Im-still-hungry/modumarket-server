import { ObjectId } from 'mongoose';

export class UpdateWebsiteDto {
  url: string;
  html: string;
  owner: ObjectId;
}
