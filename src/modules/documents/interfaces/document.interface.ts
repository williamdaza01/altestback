import { Document } from 'mongoose';

export interface DocumentPdf extends Document {
  title: string;
  file: {
    data: Buffer;
    contentType: string;
    filename: string;
  };
  state?: boolean;
}
