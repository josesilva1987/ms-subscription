/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Subscription } from './dto/subscription.dto';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
@ApiTags('Subscription')
export class SubscriptionController {
  constructor(private subscriptionService: SubscriptionService) {}

  @Get()
  @ApiOperation({ summary: 'List all subscriptisons' })
  @ApiResponse({ status: 200, description: 'Task executed with success' })
  @ApiResponse({ status: 400, description: 'Invalid Parameters' })
  async getAll(): Promise<Subscription[]> {
    return this.subscriptionService.getAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'List subscriptions by ID' })
  @ApiResponse({ status: 200, description: 'Task executed with success' })
  @ApiResponse({ status: 400, description: 'Invalid Parameters' })
  async getOne(@Param('id') id: number): Promise<Subscription> {
    return this.subscriptionService.getOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create subscription' })
  @ApiBody({ required: true, type: Subscription })
  @ApiResponse({ status: 200, description: 'Task executed with success' })
  @ApiResponse({ status: 400, description: 'Invalid Parameters' })
  async create(@Body() addSubscription: Subscription) {
    this.subscriptionService.create(addSubscription);
  }

  @Put()
  @ApiOperation({ summary: 'Update subscription by ID' })
  @ApiBody({ required: true, type: Subscription })
  @ApiResponse({ status: 200, description: 'Task executed with success' })
  @ApiResponse({ status: 400, description: 'Invalid Parameters' })
  async update(@Body() subscription: Subscription): Promise<[number, Subscription[]]> {
    return this.subscriptionService.alter(subscription);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Delete subscription by ID' })
  @ApiResponse({ status: 200, description: 'Task executed with success' })
  @ApiResponse({ status: 400, description: 'Invalid Parameters' })
  async delete(@Param('id') id: number) {
    this.subscriptionService.delete(id);
  }
}
