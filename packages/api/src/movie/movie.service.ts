import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMovie(movieId: number) {
    return await this.prismaService.movies.findUniqueOrThrow({
      where: {
        id: movieId,
      },
    });
  }
}
