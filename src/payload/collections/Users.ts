import { BeforeReadHook } from 'payload/dist/collections/config/types';
import { CollectionConfig } from 'payload/types';

const onlyNameIfPublic: BeforeReadHook = (args) => {
	const { req, doc } = args ?? {};

	// Only return name if not logged in
	if (!req?.user) {
		return { name: doc.name };
	}

	return doc;
};

const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	admin: {
		useAsTitle: 'email',
	},
	access: {
		read: () => true,
	},
	hooks: {
		beforeRead: [onlyNameIfPublic],
	},
	fields: [
		// Email added by default
		{
			name: 'name',
			label: 'Name',
			type: 'text',
		},
	],
};

export default Users;
