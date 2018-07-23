require('dotenv').config();
import {NestFactory} from '@nestjs/core';
import { MainModule } from './main.module';
import * as path from 'path';
import * as express from 'express';

async function bootstrap() {
    const app = await NestFactory.create(MainModule);

    app.use(express.static(path.join(__dirname, '/../build')));

    await app.listen(process.env.PORT || 5000);
}
bootstrap();