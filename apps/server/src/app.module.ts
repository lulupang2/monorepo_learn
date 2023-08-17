import { Module } from '@nestjs/common';
import { TrpcModule } from './trpc/trpc.module';
import { PrismaModule } from './prisma/prisma.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [TrpcModule, BoardModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
