import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Website } from '../../website/schemas/website.schema';

export type Document = User & mongoose.Document;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class User {
  @Prop({ required: true })
  kakaoCode: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Website' })
  websites: Website[];

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date;

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
