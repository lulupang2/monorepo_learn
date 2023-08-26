import { Module } from '@nestjs/common';
import { TrpcModule } from './trpc/trpc.module';
import { PrismaModule } from './prisma/prisma.module';
import { BoardModule } from './board/board.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TrpcModule, BoardModule, PrismaModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
