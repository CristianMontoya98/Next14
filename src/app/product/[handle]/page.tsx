interface ProductPageProps {
	searchParams:{
		id:string;
	}
}
export default async function ProductPage(props:ProductPageProps) {
	return <h1>Product Page</h1>;
}
