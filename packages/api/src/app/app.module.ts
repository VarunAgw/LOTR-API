import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from '../movie/movie.module';
import { QuoteModule } from '../quote/quote.module';

@Module({
  imports: [MovieModule, QuoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
