import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = chat & Document;

@Schema()
export class chat {
  @Prop()
  name: string;
  @Prop()
  content: string;
  @Prop()
  from: string;
  @Prop()
  to: string;
}

export const chatSchema = SchemaFactory.createForClass(chat);