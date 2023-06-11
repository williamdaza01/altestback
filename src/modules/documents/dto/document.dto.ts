export class CreateDocumentDTO {
    title: string;
    file: Express.Multer.File;
    state?: boolean;
}