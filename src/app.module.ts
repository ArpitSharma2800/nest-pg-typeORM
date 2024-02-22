import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PredatorsModule } from './predators/predators.module';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), PredatorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
