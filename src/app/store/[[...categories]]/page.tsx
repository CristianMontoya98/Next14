import { ProductsWrapper } from 'app/app/components/store/ProductsWrapper/ProductsWrapper';
import { getCollections } from 'app/app/services/shopify/collections';
import { getProducts } from 'app/app/services/shopify/products';

interface CategoryProps {
	params: {
		categories: string[];
		searchParams?: string;
	};
}

export default async function Category(props: CategoryProps) {
	const products = await getProducts();
	const collections = await getCollections();
	console.log(collections);
	const { categories } = props.params;
	return <ProductsWrapper products={products} />;
}
