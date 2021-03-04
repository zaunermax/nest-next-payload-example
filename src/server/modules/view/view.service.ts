import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';

type NextServer = ReturnType<typeof next>;
type Handler = ReturnType<NextServer['getRequestHandler']>;

const dev = process.env.NODE_ENV !== 'production';

@Injectable()
export class ViewService implements OnModuleInit {
	private server: NextServer | null = null;

	async onModuleInit(): Promise<void> {
		try {
			this.server = next({ dev, dir: './src/client' });
			await this.server.prepare();
		} catch (error) {
			console.log(error);
		}
	}

	public handle(...args: Parameters<Handler>): Promise<void> {
		if (!this.server) throw new Error('Next not correctly initialized.');
		return this.server.getRequestHandler()(...args);
	}
}
