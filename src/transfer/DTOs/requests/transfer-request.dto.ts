import { IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { TransferDto } from '../common/transfer.dto';

export class BookResponseDto extends TransferDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  CreatedAt: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  UpdatedAt: Date;
}
