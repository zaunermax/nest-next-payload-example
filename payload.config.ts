import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';

dotenv.config();

console.log({ publicUrl: process.env.PAYLOAD_PUBLIC_SERVER_URL });

// TODO: impl proper .env handling
export default buildConfig({
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
	collections: [],
});
