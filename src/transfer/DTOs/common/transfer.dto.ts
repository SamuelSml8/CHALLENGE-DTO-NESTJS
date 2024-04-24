import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransferDto {
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

export class UpdateTransferDto {
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
