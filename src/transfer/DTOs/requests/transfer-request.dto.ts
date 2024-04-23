import { OmitType } from '@nestjs/swagger';
import { TransferDto } from '../common/transfer.dto';

export class TransferRequestDto extends OmitType(TransferDto, ['transferId']) {}
