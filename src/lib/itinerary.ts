import type { Trip } from './types';

export interface ItineraryDay {
	date: string;
	city: string;
}

/** `YYYY-MM-DD` + n days, in pure calendar arithmetic (no timezone, no DST). */
export function addDays(date: string, n: number): string {
	const [y, m, d] = date.split('-').map(Number);
	const utc = new Date(Date.UTC(y, m - 1, d + n));
	return utc.toISOString().slice(0, 10);
}

/** Expands destinations into one entry per night, starting at the trip start date. */
export function buildItinerary(trip: Trip): ItineraryDay[] {
	const days: ItineraryDay[] = [];
	let offset = 0;
	for (const d of trip.destinations) {
		for (let i = 0; i < d.nights; i++) {
			days.push({ date: addDays(trip.startDate, offset++), city: d.city });
		}
	}
	return days;
}
