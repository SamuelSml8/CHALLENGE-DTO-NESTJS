import { IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateTransferDto } from '../common/transfer.dto';
export class BookResponseDto extends CreateTransferDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  CreatedAt: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  UpdatedAt: Date;
}
