import { Injectable } from '@nestjs/common';
import { Configuration } from 'openai';
import { CreateCompletionRequest, OpenAIApi } from 'openai/dist/api';

const MODEL_ID = 'text-davinci-003';
const TEMPERATURE = 0.9;
const MAX_TOKENS = 200;
@Injectable()
export class ChatGptService {
  private readonly openAiAPI: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.openAiAPI = new OpenAIApi(configuration);
  }

  async getAnswer(input: string) {
    try {
      const params: CreateCompletionRequest = {
        prompt: input,
        model: MODEL_ID,
        temperature: TEMPERATURE,
        max_tokens: MAX_TOKENS
      };

      const response = await this.openAiAPI.createCompletion(params);

      const { data } = response;

      if (data.choices.length) {
        return data.choices;
      }
      return response.data;
    } catch (error) {
      console.log("Error:", error);
    }
  }
}
