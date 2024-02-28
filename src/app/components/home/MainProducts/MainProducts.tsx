const getProducts = async () => {
	const response = await fetch(
		`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
		{
			headers: new Headers({
				'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
			}),
		}
	);
	const data = await response.json();
	return data;
};
/* Los componentes asincronos son una 
caracteristica del server side rendering de nextjs
que permite ejecutar peticiones si usar un useEffect 
como se haria con react */
export const MainProducts = async () => {
	const products = await getProducts();

	return (
		<section>
			<h1>Main Products</h1>
		</section>
	);
};
