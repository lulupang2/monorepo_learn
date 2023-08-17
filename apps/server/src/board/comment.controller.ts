import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from '@prisma/client';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Post('/create')
  async 작성(
    @Body()
    createCommentDTO: {
      content: string;
      nickname: string;
      password: string;
      postId: number;
      parentId?: number;
    },
  ): Promise<Comment> {
    const comment = await this.commentService.작성(
      createCommentDTO.content,
      createCommentDTO.nickname,
      createCommentDTO.password,
      createCommentDTO.postId,
      createCommentDTO.parentId ? createCommentDTO.parentId : undefined,
    );
    return comment;
  }

  @Get('/:id')
  async 읽기(@Param('id') postId: string): Promise<Comment[]> {
    console.log(postId);

    return await this.commentService.읽기(postId);
  }
}
