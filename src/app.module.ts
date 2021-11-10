import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './modules/common/middleware/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cats/cat.module';
import { CatController } from './modules/cats/cat.controller';
import { DatabaseModule } from './modules/database/database.module';
import { User } from './modules/users/entities/user.entity';

@Module({
  imports: [CatModule, DatabaseModule.forRoot([User])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.GET }, 'cats/(.*)')
      .forRoutes(CatController);
  }
}
