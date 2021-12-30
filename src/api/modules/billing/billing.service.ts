/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/sequelize';
import { Billing } from './dto/billing.dto';

export class BillingService {
  constructor(
    @InjectModel(Billing)
    private billingModel: typeof Billing
  ) {}

  async getAll(): Promise<Billing[]> {
    return this.billingModel.findAll();
  }

  async create(billing: Billing) {
    this.billingModel.create(billing);
  }
}
