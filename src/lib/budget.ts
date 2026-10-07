import type { Trip } from './types';

/** Total lodging cost of a trip. */
export function tripTotal(trip: Trip): number {
	return trip.destinations.reduce((sum, d) => sum + d.nights * d.costPerNight, 0);
}

/** Even split of the total between travellers, rounded to the cent. */
export function sharePerTraveller(trip: Trip): number {
	if (trip.travellers.length === 0) return 0;
	return Math.round((tripTotal(trip) / trip.travellers.length) * 100) / 100;
}
