import { ChatGptService } from './chat-gpt/chat-gpt.service';
import { Query, Controller, Get } from '@nestjs/common';
import { HistoryService } from './history/history.service';

@Controller('api')
export class ApiController {
  constructor(
    private readonly chatGptService: ChatGptService,
    private readonly historySerivce: HistoryService
    ) {}

  @Get('/chat')
  getAnswer(@Query('question') question: string) {
    this.historySerivce.create(question);
    return this.chatGptService.getAnswer(question);
  }
}
