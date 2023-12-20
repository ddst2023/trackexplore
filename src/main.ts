import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen( parseInt(process.env.PORT, 10) || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
