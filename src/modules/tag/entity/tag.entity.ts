import { Article } from 'src/modules/article/entity/article.entity';
import { IsNotEmpty } from 'class-validator';
import { Common } from 'src/common/entity/common.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Tag extends Common {
  // 标签名称
  @Column()
  @IsNotEmpty()
  label: string;

  // 文章
  @ManyToMany(() => Article, (article) => article.tags)
  articles: Article[];
}
