import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';


@Module({
  imports: [
    ApiModule, 
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.MONGODB_URI)
  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
