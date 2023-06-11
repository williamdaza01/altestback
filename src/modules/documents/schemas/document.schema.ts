import { Schema, SchemaTypes } from 'mongoose';

export const DocumentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  file: {
    data: {
      type: Buffer,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
  },
  state: {
    type: Boolean,
    default: false,
  },
});
