/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BillingController } from './api/modules/billing/billing.controller';
import { BillingService } from './api/modules/billing/billing.service';
import { Billing } from './api/modules/billing/dto/billing.dto';
import { Subscription } from './api/modules/subscription/dto/subscription.dto';
import { SubscriptionController } from './api/modules/subscription/subscription.controller';
import { SubscriptionService } from './api/modules/subscription/subscription.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Subscription, Billing]),
  ],
  controllers: [AppController, SubscriptionController, BillingController],
  providers: [AppService, SubscriptionService, BillingService],
})
export class AppModule {}
