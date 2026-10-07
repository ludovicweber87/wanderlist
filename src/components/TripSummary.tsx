import type { Trip } from '../lib/types';
import { tripTotal, sharePerTraveller } from '../lib/budget';

export function TripSummary({ trip }: { trip: Trip }) {
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
