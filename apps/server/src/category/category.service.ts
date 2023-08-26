import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '@server/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async 작성({ main, sub }: CreateCategoryDto) {
    const check = await this.찾기(main);
    if (!check) {
      const mainCategory = await this.prisma.category.create({
        data: {
          name: main,
        },
      });
      await this.prisma.subCategory.create({
        data: {
          name: sub,
          category: {
            connect: {
              id: mainCategory.id,
            },
          },
        },
      });
    } else {
      await this.prisma.subCategory.create({
        data: {
          name: sub,
          category: {
            connect: {
              id: check.id,
            },
          },
        },
      });
    }
  }

  async 전체찾기() {
    const main = await this.prisma.category.findMany({
      select: {
        name: true,
        subCategories: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
    return main;
  }

  async 찾기(category: string) {
    const result = await this.prisma.category.findFirst({
      where: {
        name: category,
      },
    });
    console.log(result);

    return result;
  }
  async 서브찾기(category: string) {
    const result = await this.prisma.subCategory.findMany({
      where: {
        name: category,
      },
    });
    return result;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
