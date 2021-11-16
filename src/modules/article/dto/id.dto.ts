import { regPositive } from './../../../utils/regex.util';
import { IsNotEmpty, Matches } from 'class-validator';

export class IdDTO {
  @Matches(regPositive, { message: '请输入有效 id' })
  @IsNotEmpty({ message: 'id 不能为空' })
  readonly id: number;
}
