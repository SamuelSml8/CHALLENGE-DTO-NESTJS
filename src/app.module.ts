import { TransferModule } from './transfer/transfer.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from './persistence/persistence/persistence.module';
import dbConfig from './persistence/persistence/db.config';
import { TransferController } from './transfer/controllers/transfer.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistenceModule,
    TransferModule,
  ],
  controllers: [TransferController],
  providers: [],
})
export class AppModule {}
