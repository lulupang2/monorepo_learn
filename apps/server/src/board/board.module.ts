import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PrismaModule } from '@server/prisma/prisma.module';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [PrismaModule],
})
export class BoardModule {}
