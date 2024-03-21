import Image from 'next/image';
import styles from './mainProducts.module.scss';
import { getProducts } from 'app/app/services/shopify';

export const MainProducts = async () => {
	const products = await getProducts();

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
