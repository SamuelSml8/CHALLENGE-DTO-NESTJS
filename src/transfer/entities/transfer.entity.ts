import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({ timestamps: true })
export class Transfer extends Document {
  @Prop({ required: true })
  transferId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  accountOrigin: string;

  @Prop({ required: true })
  accountDestination: string;

  createdAt: Date;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);

TransferSchema.index(
  { transferId: 1 },
  {
    name: 'index to improve transferId search query',
  },
);
