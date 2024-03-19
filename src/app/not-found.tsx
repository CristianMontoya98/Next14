import Image from 'next/image';
import Link from 'next/link';
import styles from 'app/sass/not-found.module.scss';

export default function NotFound() {
	return (
		<main className={styles.NotFound}>
			<h1 className={styles.NotFound__title}>404</h1>
			<Image
				src='/images/404.png'
				alt='404'
				width={300}
				height={300}
			/>
			<h2 className={styles.NotFound__subtitle}>
				¡Uy, parece que el enlace al que quieres acceder no está
				disponible!
			</h2>
			<p className={styles.NotFound__description}>
				Pero accede a nuestra tienda 24/7
			</p>
			<Link
				className={styles.NotFound__link}
				href='/store'
			>
				¡Vamos de compras!
			</Link>
		</main>
	);
}
