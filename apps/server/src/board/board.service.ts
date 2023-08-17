import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }

  findAll() {
    return `This action returns all board`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
