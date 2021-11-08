import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cats/cat.module';
import { DatabaseModule } from './modules/database/database.module';
import { User } from './modules/users/entities/user.entity';

@Module({
  imports: [CatModule, DatabaseModule.forRoot([User])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
