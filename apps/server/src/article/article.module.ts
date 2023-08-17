import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  providers: [ArticleService, CommentService],
  controllers: [ArticleController, CommentController]
})
export class ArticleModule {}
