import type { Trip } from './types';

/** Total lodging cost of a trip. */
export function tripTotal(trip: Trip): number {
	return trip.destinations.reduce((sum, d) => sum + d.nights * d.costPerNight, 0);
}

/**
 * Share of each traveller, rounded to the cent.
 * Each destination's cost is split evenly between the travellers staying there,
 * so everyone pays per night actually spent.
 */
export function sharePerTraveller(trip: Trip): Record<string, number> {
	const shares: Record<string, number> = Object.fromEntries(trip.travellers.map((t) => [t, 0]));
	for (const d of trip.destinations) {
		const stayers = d.travellers ?? trip.travellers;
		if (stayers.length === 0) continue;
		const part = (d.nights * d.costPerNight) / stayers.length;
		for (const t of stayers) shares[t] = (shares[t] ?? 0) + part;
	}
	for (const t of Object.keys(shares)) shares[t] = Math.round(shares[t] * 100) / 100;
	return shares;
}
