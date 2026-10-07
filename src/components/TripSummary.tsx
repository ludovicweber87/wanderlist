import type { Trip } from '../lib/types';
import { tripTotal, sharePerTraveller } from '../lib/budget';

export function TripSummary({ trip, onAddStop }: { trip: Trip; onAddStop?: () => void }) {
	if (trip.destinations.length === 0) {
		return (
			<section className="trip-summary trip-summary--empty">
				<h2>{trip.name}</h2>
				<p>No stop yet. Where do you want to start?</p>
				<button type="button" onClick={onAddStop}>
					Add the first stop
				</button>
			</section>
		);
	}

	return (
		<section className="trip-summary">
			<h2>{trip.name}</h2>
			<p>
				{trip.destinations.length} stops · {trip.travellers.length} travellers
			</p>
			<p>
				Total: €{tripTotal(trip)} — €{sharePerTraveller(trip)} each
			</p>
		</section>
	);
}
