import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const prisma = new PrismaClient();

@Injectable()
export class QuoteService {
  constructor(private readonly prismaService: PrismaService) {}

  async getQuote(quoteId: number) {
    return await prisma.quotes.findUniqueOrThrow({
      where: {
        id: quoteId,
      },
    });
  }

  async getQuotesByMovie(movieId: number) {
    return await prisma.quotes.findMany({
      where: {
        movie_id: movieId,
      },
    });
  }
}
