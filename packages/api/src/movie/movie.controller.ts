import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { ApiOperation } from '@nestjs/swagger';
import { MovieEntity } from './movie.entity';
import { plainToInstance } from 'class-transformer';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({ summary: 'Get movie details' })
  @Get('movie/:movieId')
  async getMovie(
    @Param('movieId', ParseIntPipe) movieId: number
  ): Promise<MovieEntity> {
    const movie = await this.movieService.getMovie(movieId);

    return plainToInstance(MovieEntity, movie);
  }
}
