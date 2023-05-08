import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiController } from './api.controller';
import { ChatGptService } from './chat-gpt/chat-gpt.service';
import { HistoryService } from './history/history.service';
import { History, HistorySchema } from './history/schemas/history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: History.name, 
        schema: HistorySchema 
      }
    ])
  ],
  controllers: [ApiController],
  providers: [ChatGptService, HistoryService]
})
export class ApiModule {}
