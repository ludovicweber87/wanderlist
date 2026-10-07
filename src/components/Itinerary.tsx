import type { Trip } from '../lib/types';
import { buildItinerary } from '../lib/itinerary';

export function Itinerary({ trip }: { trip: Trip }) {
	return (
		<ol className="itinerary">
			{buildItinerary(trip).map((day) => (
				<li key={day.date}>
					<time>{day.date}</time> {day.city}
				</li>
			))}
		</ol>
	);
}
