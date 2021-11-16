import { HttpExecptionFilter } from './filters/http-execption.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExecptionFilter());
  await app.listen(3000);
}
bootstrap();
