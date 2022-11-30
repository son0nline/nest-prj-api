import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postGreeting(name: string): string {
    return `Hello ${name}!`;
  }
}
