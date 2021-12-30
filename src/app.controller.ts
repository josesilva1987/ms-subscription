import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('All')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/running')
  @ApiOperation({ summary: 'Created billings of the subscription' })
  @ApiResponse({ status: 200, description: 'Task executed with success' })
  @ApiResponse({ status: 400, description: 'Invalid Parameters' })
  getVersion(): string {
    return `RUNNING VERSION ${process.env.VERSION}`;
  }
}
