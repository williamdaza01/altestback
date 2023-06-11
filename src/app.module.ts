import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DocumentModule } from './modules/documents/document.module';

@Module({
  imports: [
    UserModule, 
    MongooseModule.forRoot('mongodb://localhost:27017/altestdb', {
    useNewUrlParser: true
  }), DocumentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
