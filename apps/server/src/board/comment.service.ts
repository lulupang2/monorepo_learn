import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { PrismaService } from '@server/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  async 작성(
    content: string,
    nickname: string,
    password: string,
    postId: number,
    parentId?: number,
  ): Promise<Comment> {
    const comment = await this.prisma.comment.create({
      data: {
        content,
        nickname,
        password,
        postId,
        parentId,
      },
    });
    return comment;
  }
  async 읽기(postId?: string): Promise<Comment[]> {
    try {
      const comment = await this.prisma.comment.findMany({
        where: {
          postId: Number(postId),
        },
        include: {
          children: true,
        },
      });

      if (!comment) {
        throw new BadRequestException('댓글을 찾을 수 없습니다.');
      }

      return comment;
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        throw new HttpException(error.name, 400);
      }
      throw new BadRequestException('댓글 조회에 실패했습니다.');
    }
  }
}
