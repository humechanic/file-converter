import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module.js';
import { VersioningType } from '@nestjs/common';
import { EnhancedValidationPipe } from '@/core/shared/pipes/validation.pipe';
import { LoggerService } from './core/shared/logger/logger.service.js';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = await app.resolve(LoggerService);
  logger.setContext('Bootstrap');

  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('File Converter API')
    .setDescription('File Converter app service api with auth and permissions')
    .setVersion('0.0.1')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new EnhancedValidationPipe())

  SwaggerModule.setup('api', app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'File Converter API',
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  logger.log(`🚀 Application is running on port: ${port}`);
}

void bootstrap();
