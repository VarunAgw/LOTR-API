import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('movie/:movieId')
  getMovie(@Param('movieId', ParseIntPipe) movieId: number) {
    return this.movieService.getMovie(movieId);
  }
}
