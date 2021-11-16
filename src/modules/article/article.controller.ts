import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { IdDTO } from './dto/id.dto';
import { ListDTO } from './dto/list.dto';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ArticleInfoVO, ArticleInfoResponse } from './vo/article-info.vo';
import { ArticleListResponse, ArticleListVO } from './vo/article-list.vo';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('list')
  @ApiOkResponse({ description: '文章列表', type: ArticleListResponse })
  async getMore(@Query() listDTO: ListDTO): Promise<ArticleListData> {
    return await this.articleService.getMore(listDTO);
  }

  @Get('info')
  @ApiOkResponse({ description: '文章详情', type: ArticleInfoResponse })
  async getOne(@Query() idDTO: IdDTO): Promise<ArticleListData> {
    return await this.articleService.getOne(idDTO);
  }

  @Post('create')
  @ApiOkResponse({ description: '创建文章', type: ArticleInfoResponse })
  async create(
    @Body() articleCreateDTO: ArticleCreateDTO,
  ): Promise<ArticleInfoData> {
    return await this.articleService.create(articleCreateDTO);
  }

  @Post('edit')
  @ApiOkResponse({ description: '编辑文章', type: ArticleInfoResponse })
  async update(
    @Body() articleEditDTO: ArticleEditDTO,
  ): Promise<ArticleInfoData> {
    return await this.articleService.update(articleEditDTO);
  }

  @Post('delete')
  @ApiOkResponse({ description: '删除文章', type: ArticleInfoResponse })
  async delete(@Body() idDTO: IdDTO): Promise<ArticleInfoData> {
    return await this.articleService.delete(idDTO);
  }
}
