import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  main: string;
  @IsString()
  sub: string;
}
