import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transfer } from '../entities/transfer.entity';

import { CreateTransferDto } from '../DTOs/common/transfer.dto';
import { UpdateTransferDto } from '../DTOs/common/transfer.dto';

@Injectable()
export class TransferService {
  constructor(
    @InjectModel(Transfer.name)
    private transferModel: Model<Transfer>
  ) {}

  async findAll(): Promise<Transfer[]> {
    return await this.transferModel.find().exec();
  }

  async findOne(transferId: string): Promise<Transfer> {
    const transfer = await this.transferModel.findOne({ transferId }).exec();
    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${transferId} not found`);
    }
    return transfer;
  }

  async create(createTransferDto: CreateTransferDto): Promise<Transfer> {
    const createdTransfer = new this.transferModel(createTransferDto);
    return createdTransfer.save();
  }

  async update(
    transferId: string,
    updateTransferDto: UpdateTransferDto,
  ): Promise<Transfer> {
    const existingTransfer = await this.transferModel
      .findOneAndUpdate(
        { transferId },
        { $set: updateTransferDto },
        { new: true },
      )
      .exec();
    if (!existingTransfer) {
      throw new NotFoundException(`Transfer with ID ${transferId} not found`);
    }
    return existingTransfer;
  }

  async remove(transferId: string): Promise<Transfer> {
    const deletedTransfer = await this.transferModel
      .findOneAndDelete({ transferId })
      .exec();
    if (!deletedTransfer) {
      throw new NotFoundException(`Transfer with ID ${transferId} not found`);
    }
    return deletedTransfer;
  }
}
