import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { UxTest } from './ux-test.schema';
import { Page } from './page.schema';
import { Project } from './project.schema';
import { registerDiscriminator } from './collection.schema';

export type TaskDocument = Task & Document;

@Schema({ discriminatorKey: '_type' })
export class Task {
  @Prop({ required: true })
  _id: Types.ObjectId = new Types.ObjectId();

  @Prop({ required: true, unique: true, type: String, index: true })
  airtable_id = '';

  @Prop({ required: true, type: String })
  title = '';

  @Prop({ type: String })
  group = '';

  @Prop({ type: String })
  subgroup = '';

  @Prop({ type: String })
  topic = '';

  @Prop({ type: String })
  subtopic = '';

  @Prop({ type: [String] })
  user_type = [];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'UxTest' }] })
  ux_tests?: Types.ObjectId[] | UxTest[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Project' }] })
  projects?: Types.ObjectId[] | Project[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Page' }] })
  pages?: Types.ObjectId[] | Page[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);

export const TaskConfig = {
  name: Task.name,
  schema: TaskSchema,
  value: 'tasks',
}

const taskModel = registerDiscriminator(TaskConfig);

export function getTaskModel() {
  return taskModel as Model<TaskDocument>;
}

