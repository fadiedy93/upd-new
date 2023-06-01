import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import type { IUrl, UrlHash } from '@dua-upd/types-common';

export type UrlDocument = Url & Document;

@Schema({ collection: 'urls' })
export class Url implements IUrl {
  @Prop({ type: Types.ObjectId, required: true })
  _id = new Types.ObjectId();

  @Prop({ type: String, required: true, unique: true })
  url: string;

  @Prop({ type: String, index: true })
  title?: string;

  @Prop({ type: Types.ObjectId, sparse: true })
  page?: Types.ObjectId;

  @Prop({ type: Object })
  metadata?: { [prop: string]: string };

  @Prop({ type: [{ href: String, text: String }]})
  links?: { href: string, text: string }[];

  @Prop({ type: String, index: true })
  redirect?: string;

  @Prop({ type: Date, index: true })
  last_checked?: Date;

  @Prop({ type: Date, index: true })
  last_modified?: Date;

  @Prop({ type: Boolean, index: true })
  is_404?: boolean;

  @Prop({ type: [{ hash: String, date: Date }] })
  hashes?: UrlHash[];

  @Prop({ type: String })
  latest_snapshot?: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);

UrlSchema.index({ 'links.text': 1 }, { background: true });
UrlSchema.index({ 'links.href': 1 }, { background: true });
UrlSchema.index({ last_checked: -1 }, { background: true });
UrlSchema.index({ last_modified: -1 }, { background: true });
