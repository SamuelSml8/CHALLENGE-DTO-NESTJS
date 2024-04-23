import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  @IsString()
  transferId: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  accountOrigin: string;

  @IsNotEmpty()
  @IsString()
  accountDestination: string;
}
