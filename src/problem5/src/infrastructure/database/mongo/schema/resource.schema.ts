import mongoose, { Schema } from 'mongoose';
import BaseSchema, { IBase } from './base.schema';
import { EResourceStatus } from '../../../../domain';

export interface IResource extends IBase {
  name: string;
  description: string;
  status: EResourceStatus;
}

const ResourceSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
  },
  status: {
    type: Number,
    required: [true, 'Name is required'],
  },
});

ResourceSchema.add(BaseSchema);

export const Resource = mongoose.model<IResource>('Resource', ResourceSchema);
