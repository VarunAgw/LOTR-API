import { Exclude, Expose } from 'class-transformer';
import { QuoteEntity } from '../quote/quote.entity';
import { Prisma } from '@prisma/client';

@Exclude()
export class MovieEntity {
  @Expose()
  id: number;

  @Expose()
  title: string;
}
