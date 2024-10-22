import { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
	slug: 'categories',
	admin: {
		useAsTitle: 'name',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'name',
			label: 'Name',
			type: 'text',
		},
	],
	timestamps: false,
};

export default Categories;
