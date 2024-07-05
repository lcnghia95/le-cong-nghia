import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IBase extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date| null;
}

const BaseSchema: Schema = new Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default BaseSchema;