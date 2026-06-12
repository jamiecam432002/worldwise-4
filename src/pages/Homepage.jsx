import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';
import PageNav from '../components/PageNav/PageNav';

export default function Homepage() {
	return (
		<main className={styles.homepage}>
			<PageNav />
			<section className='flex flex-col items-center justify-center gap-[2.5rem] text-center h-[85%]'>
				<h1 className='text-[5rem] leading-[1.3] font-bold'>
					You travel the world.
					<br />
					WorldWise keeps track of your adventures.
				</h1>
				<h2 className='text-[2.3rem] text-[#aaa] mb-10 block w-[90%]'>
					A world map that tracks your footsteps into every city you can think
					of. Never forget your wonderful experiences, and show your friends how
					you have wandered the world.
				</h2>
				<Link
					to='/login'
					className='cta inline-block px-[3rem] py-[1rem] font-semibold text-[1.6rem] rounded-[5px] uppercase'>
					Start tracking now
				</Link>
			</section>
		</main>
	);
}
