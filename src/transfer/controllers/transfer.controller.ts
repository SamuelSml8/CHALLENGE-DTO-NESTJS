import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { Transfer } from '../entities/transfer.entity';
import {
  CreateTransferDto,
  UpdateTransferDto,
} from '../DTOs/common/transfer.dto';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get('all')
  async findAll(): Promise<Transfer[]> {
    return this.transferService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') transferId: string): Promise<Transfer> {
    return this.transferService.findOne(transferId);
  }

  @Post('create')
  async create(
    @Body() createTransferDto: CreateTransferDto,
  ): Promise<Transfer> {
    return this.transferService.create(createTransferDto);
  }

  @Put('update/:id')
  async update(
    @Param('id') transferId: string,
    @Body() updateTransferDto: UpdateTransferDto,
  ): Promise<Transfer> {
    return this.transferService.update(transferId, updateTransferDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') transferId: string): Promise<Transfer> {
    return this.transferService.remove(transferId);
  }
}
