/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subscription } from './dto/subscription.dto';
//const dataTest = new Date("2021-01-01");
//const dataTestFim = new Date("2021-12-31");

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel(Subscription)
    private subscriptionModel: typeof Subscription
  ) {}

  async getAll(): Promise<Subscription[]> {
    return this.subscriptionModel.findAll();
  }

  async getOne(id: number): Promise<Subscription> {
    return this.subscriptionModel.findByPk(id);
  }

  async create(subscription: Subscription) {
    this.subscriptionModel.create(subscription);
  }

  async alter(subscription: Subscription): Promise<[number, Subscription[]]> {
    return this.subscriptionModel.update(subscription, {
      where: {
        id: subscription.id,
      },
    });
  }

  async delete(id: number) {
    const subscription: Subscription = await this.getOne(id);
    subscription.destroy();
  }
}
