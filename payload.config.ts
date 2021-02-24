import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Meta from './collections/Meta';
import Avatar from './collections/Avatar';
import Profile from './collections/Profile';
import GalleryImage from './collections/GalleryImage';

dotenv.config();

console.log({ publicUrl: process.env.PAYLOAD_PUBLIC_SERVER_URL });

// TODO: impl proper .env handling
export default buildConfig({
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'soidad-ned-la-sein...',
	collections: [Meta, Avatar, GalleryImage, Profile],
});
