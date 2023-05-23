import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QuoteService } from './quote.service';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get('quote/:quoteId')
  getQuote(@Param('quoteId', ParseIntPipe) quoteId: number) {
    return this.quoteService.getQuote(quoteId);
  }

  @Get('movie/:movieId/quote')
  getQuotesByMovie(@Param('movieId', ParseIntPipe) movieId: number) {
    return this.quoteService.getQuotesByMovie(movieId);
  }
}
