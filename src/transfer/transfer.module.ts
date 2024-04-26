import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Transfer, TransferSchema } from './entities/transfer.entity';
import { TransferService } from './services/transfer.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Transfer.name,
        schema: TransferSchema,
      },
    ]),
  ],
  providers: [TransferService],
  exports: [TransferService],
})
export class TransferModule {}
