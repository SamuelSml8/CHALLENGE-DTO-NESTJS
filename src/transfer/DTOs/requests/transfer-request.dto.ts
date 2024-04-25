import { CreateTransferDto } from '../common/transfer.dto';
import { OmitType } from '@nestjs/swagger';
export class TransferRequestDto extends OmitType(CreateTransferDto, [
  'transferId',
]) {}
