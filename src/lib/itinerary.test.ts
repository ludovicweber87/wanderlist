import { describe, it, expect } from 'vitest';
import { addDays, buildItinerary } from './itinerary';

describe('itinerary', () => {
	it('does not skip a day across the March DST change', () => {
		const days = buildItinerary({
			id: 'paris',
			name: 'Paris',
			startDate: '2026-03-27',
			travellers: ['Alex'],
			destinations: [{ id: 'par', city: 'Paris', country: 'France', nights: 5, costPerNight: 150 }],
		});
		expect(days.map((d) => d.date)).toEqual([
			'2026-03-27',
			'2026-03-28',
			'2026-03-29',
			'2026-03-30',
			'2026-03-31',
		]);
	});

	it('adds days across month boundaries', () => {
		expect(addDays('2026-01-31', 1)).toBe('2026-02-01');
	});
});
