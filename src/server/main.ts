import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/server/app.module';
import payload from 'payload';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const httpAdapter = await app.getHttpAdapter();

	payload.init({
		secret: '??SECRET_KEY_SECRET_KEY_SECRET_KEY_SECRET_KEY!!',
		mongoURL: 'mongodb://localhost/nest-next-payload',
		express: httpAdapter.getInstance(),
	});

	await app.listen(3000);
}

bootstrap();
