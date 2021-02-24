import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';
import NextServer from 'next/dist/next-server/server/next-server';

@Injectable()
export class ViewService implements OnModuleInit {
	private server: NextServer | null = null;

	async onModuleInit(): Promise<void> {
		try {
			this.server = next({ dev: true, dir: './src/client' });
			await this.server.prepare();
		} catch (error) {
			console.log(error);
		}
	}

	getNextServer(): NextServer {
		if (!this.server) throw new Error('Next not correctly initialized.');
		return this.server;
	}
}
