import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { DocumentPdf } from './interfaces/document.interface';
import { CreateDocumentDTO } from './dto/document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel('DocumentPdf') private docModel: Model<DocumentPdf>,
  ) {}

  async createDocument(
    createDocumentDTO: CreateDocumentDTO,
  ): Promise<DocumentPdf> {
    const { title, file, state } = createDocumentDTO;

    const document = new this.docModel({
      title,
      file: {
        data: file.buffer,
        contentType: file.mimetype,
        filename: file.originalname,
      },
      state,
    });

    return await document.save();
  }

  async getDocuments(){
    try {
      const documents = await this.docModel.find().exec();
      return { success: true, data: documents };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
