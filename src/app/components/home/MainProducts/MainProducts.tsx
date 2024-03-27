import Image from 'next/image';
import styles from './mainProducts.module.scss';
import { getProducts } from 'app/app/services/shopify';

export const MainProducts = async () => {
	//Esta es una manera de hacer la peticion que trae los productos:
	//const products = await getProducts();

	//Back for frontend trata de ofuscar la peticion:
	const response = await fetch('http://localhost:3000/api');
	const { products } = await response.json();
	return (
		<section className={styles.MainProducts}>
			<h3>✨ New products released!</h3>
			<div className={styles.MainProducts__list}>
				{products?.map((product: any) => {
					const imageSrc = product.images[0].src;
					return (
						<article key={product.id}>
							<p>{product.title}</p>
							<Image
								fill
								src={imageSrc}
								alt={product.title}
								loading='eager'
							/>
						</article>
					);
				})}
			</div>
		</section>
	);
};
