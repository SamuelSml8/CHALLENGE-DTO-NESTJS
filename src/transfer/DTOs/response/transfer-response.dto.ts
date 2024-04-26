import { IsDate, IsNotEmpty } from 'class-validator';
import { CreateTransferDto } from '../common/transfer.dto';
import { Type } from 'class-transformer';

export class TransferResponseDto extends CreateTransferDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  updateAt: Date;
}
