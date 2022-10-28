import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type WebsiteDocument = Website & Document;

@Schema()
export class Website {
  @Prop({ required: true })
  website_name: string;

  @Prop({ required: true })
  url: string;

  @Prop()
  html: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User })
  owner: ObjectId;
}

export const WebsiteSchema = SchemaFactory.createForClass(Website);
