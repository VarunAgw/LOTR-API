import { Module } from '@nestjs/common';

import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieService, PrismaService],
})
@Module({})
export class MovieModule {}
