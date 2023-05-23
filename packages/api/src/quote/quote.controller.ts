import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { ApiOperation } from '@nestjs/swagger';
import { QuoteEntity } from './quote.entity';
import { plainToInstance } from 'class-transformer';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @ApiOperation({ summary: 'Get quote details' })
  @Get('quote/:quoteId')
  async getQuote(
    @Param('quoteId', ParseIntPipe) quoteId: number
  ): Promise<QuoteEntity> {
    const quote = await this.quoteService.getQuote(quoteId);

    return plainToInstance(QuoteEntity, quote);
  }

  @ApiOperation({ summary: 'Get all quotes for a movie' })
  @Get('movie/:movieId/quote')
  async getQuotesByMovie(
    @Param('movieId', ParseIntPipe) movieId: number
  ): Promise<QuoteEntity[]> {
    const quotes = await this.quoteService.getQuotesByMovie(movieId);

    return quotes.map((quote) => plainToInstance(QuoteEntity, quote));
  }
}
