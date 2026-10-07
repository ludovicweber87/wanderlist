import type { Trip } from './types';

export interface ItineraryDay {
	date: string;
	city: string;
}

/** Expands destinations into one entry per night, starting at the trip start date. */
export function buildItinerary(trip: Trip): ItineraryDay[] {
	const days: ItineraryDay[] = [];
	const cursor = new Date(`${trip.startDate}T00:00:00`);
	for (const d of trip.destinations) {
		for (let i = 0; i < d.nights; i++) {
			days.push({ date: cursor.toISOString().slice(0, 10), city: d.city });
			cursor.setDate(cursor.getDate() + 1);
		}
	}
	return days;
}
