/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subscription } from './api/subscription/dto/subscription.dto';
import { SubscriptionController } from './api/subscription/subscription.controller';
import { SubscriptionService } from './api/subscription/subscription.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'J@060187',
      database: 'subscription',
      autoLoadModels: true,
      synchronize: true, 
    }),
    SequelizeModule.forFeature([Subscription])
  ],
  controllers: [AppController, SubscriptionController],
  providers: [AppService, SubscriptionService],
})
export class AppModule {}
