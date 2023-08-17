import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from './trpc/trpc.module';
import { ArticleModule } from './article/article.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TrpcModule, ArticleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
