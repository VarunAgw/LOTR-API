import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class QuoteEntity {
  @Expose()
  id: number;

  @Expose()
  movie_id: number;

  @Expose()
  content: string;
}
