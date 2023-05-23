import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 100; i++) {
    const movieTitle: string = faker.lorem.words({ min: 1, max: 3 });

    const quotes: { content: string }[] = [];

    for (let j = 0; j < faker.helpers.rangeToNumber({ min: 1, max: 10 }); j++) {
      const quoteContent = faker.lorem.paragraph({ min: 1, max: 3 });
      quotes.push({
        content: quoteContent,
      });
    }

    const movie = await prisma.movies.create({
      data: {
        title: movieTitle,
        quotes: {
          create: quotes,
        },
      },
    });
  }
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
