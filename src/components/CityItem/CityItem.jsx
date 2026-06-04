import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { useCities } from '../../contexts/CitiesContext';

const formatDate = (date) =>
	new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(new Date(date));

export default function CityItem({ city }) {
	const {
		cityName,
		emoji,
		date,
		id,
		position: { lat, lng },
	} = city;

	const { currentCity, deleteCity } = useCities();

	async function handleDelete(e) {
		e.preventDefault();
		await deleteCity(id);
	}
	return (
		<li>
			<Link
				to={`${id}?lat=${lat}&lng=${lng}`}
				className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''}`}>
				<span className={styles.emoji}>{emoji}</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.date}>{formatDate(date)}</time>
				<button onClick={handleDelete} className={styles.deleteBtn}>
					&times;
				</button>
			</Link>
		</li>
	);
}
