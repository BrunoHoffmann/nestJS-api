import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloWorld(): string {
    return 'port 3000';
  }
}
