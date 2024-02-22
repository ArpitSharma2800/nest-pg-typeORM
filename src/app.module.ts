import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffModule } from './staff/staff.module';
import config from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), StaffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
