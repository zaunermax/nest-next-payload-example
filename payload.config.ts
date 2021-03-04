import { buildConfig } from 'payload/config';

import Users from './src/payload/collections/Users';
import Categories from './src/payload/collections/Categories';
import Posts from './src/payload/collections/Posts';
import Tags from './src/payload/collections/Tags';

export default buildConfig({
	serverURL: 'http://localhost:3000',
	admin: {
		user: Users.slug,
	},
	collections: [Categories, Posts, Tags, Users],
});
