import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HistoryDocument = History & Document;

@Schema()
export class History {

  @Prop({required: true})
  question: string;

  @Prop({required: true})
  date: Date;
}

export const HistorySchema = SchemaFactory.createForClass(History);