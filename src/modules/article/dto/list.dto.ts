import { IsOptional, Matches } from 'class-validator';
import { regPositive } from 'src/utils/regex.util';

export class ListDTO {
  @IsOptional()
  @Matches(regPositive, { message: 'page 不可小于 0' })
  readonly page?: number;

  @IsOptional()
  @Matches(regPositive, { message: 'pageSize 不可小于 0' })
  readonly pageSize?: number;
}
