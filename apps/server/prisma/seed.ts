import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'ab2c@abc',
  },
];
const categoryData: Prisma.CategoryCreateInput[] = [
  {
    name: 'Node.js',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'TypeScript',
  },
  {
    name: 'Framework',
  },
  {
    name: 'React',
  },
  {
    name: 'NestJS',
  },
];

const subCategoryData: Prisma.SubCategoryCreateInput[] = [
  {
    name: 'Node.js',
    category: {
      create: {
        id: 0,
        name: 'Node.js',
      },
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
  }
  for (const c of categoryData) {
    const category = await prisma.category.create({
      data: c,
    });

    console.log(`Created category with id: ${category.id}`);
  }
  for (const s of subCategoryData) {
    const subCategory = await prisma.subCategory.create({
      data: s,
    });

    console.log(`Created subCategory with id: ${subCategory.id}`);
  }
  console.log(`Seeding finished.`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
