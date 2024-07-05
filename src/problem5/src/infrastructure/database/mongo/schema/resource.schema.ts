import mongoose, { Schema } from 'mongoose';
import BaseSchema, { IBase } from './base.schema';

export interface IResource extends IBase {
  name: string;
  description: string;
}

const ResourceSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [100, 'Name must be less than 100 characters long'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [500, 'Description must be less than 500 characters long'],
  },
});

ResourceSchema.add(BaseSchema);

export const Resource = mongoose.model<IResource>('Resource', ResourceSchema);