/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BillingService } from './billing.service';
import { Billing } from './dto/billing.dto';

@Controller('billing')
@ApiTags('Billing')
export class BillingController {
  constructor(private billingService: BillingService) {}

  @Get()
  @ApiOperation({ summary: 'List all billings' })
  @ApiResponse({ status: 200, description: 'Task executed with success' })
  @ApiResponse({ status: 400, description: 'Invalid Parameters' })
  async getAll(): Promise<Billing[]> {
    return this.billingService.getAll();
  }

  @Post()
  @ApiOperation({ summary: 'Created billings of the subscription' })
  @ApiBody({ required: true, type: Billing })
  @ApiResponse({ status: 200, description: 'Task executed with success' })
  @ApiResponse({ status: 400, description: 'Invalid Parameters' })
  async create(@Body() billing: Billing){
    this.billingService.create(billing);
  }
}
