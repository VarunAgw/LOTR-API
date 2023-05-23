import { Module } from '@nestjs/common';

import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [QuoteController],
  providers: [QuoteService, PrismaService],
})
@Module({})
export class QuoteModule {}
