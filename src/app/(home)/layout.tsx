import { Description } from '../components/home/Description/Description';
import { Hero } from '../components/home/Hero/Hero';

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Hero />
			<Description />
			{children}
		</div>
	);
}
