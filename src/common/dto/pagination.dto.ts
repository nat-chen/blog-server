import { IsOptional, Matches } from 'class-validator';
import { regPositive } from 'src/utils/regex.util';

export class PaginationDTO {
  /**
   * 第几页
   * @example 1
   */
  @IsOptional()
  @Matches(regPositive, { message: 'page 不可小于 0' })
  readonly page?: number;

  /**
   * 每页数据条数
   * @example 10
   */
  @IsOptional()
  @Matches(regPositive, { message: 'pageSize 不可小于 0' })
  readonly pageSize?: number;

  /**
   * 总页数
   * @example 10
   */
  pages: number;

  /**
   * 总条数
   * @example 100
   */
  total: number;
}
