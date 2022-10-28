import { ObjectId } from 'mongoose';

export class DeleteWebsiteDto {
  url: string;
  owner: ObjectId;
}
