import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { History, HistoryDocument } from './schemas/history.schema';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(@InjectModel(History.name) 
    private readonly model: Model<HistoryDocument>
  ) {}

  async findAll(): Promise<History[]> {
    return await this.model.find().exec();
  }

  async create(question: string): Promise<History> {        
    return await new this.model({
      ...CreateHistoryDto,
      question,
      date: new Date(),
    }).save();
  }

  async findOne(id: string): Promise<History> {
    return await this.model.findById(id).exec();
  }

  async delete(id: string): Promise<History> {
    return await this.model.findByIdAndRemove(id).exec();
  }
}
