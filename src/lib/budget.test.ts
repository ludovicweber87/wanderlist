import { describe, it, expect } from 'vitest';
import { tripTotal, sharePerTraveller } from './budget';
import { sampleTrip } from '../data/sampleTrip';
import type { Trip } from './types';

describe('budget', () => {
	it('sums nights × cost per night', () => {
		expect(tripTotal(sampleTrip)).toBe(4 * 180 + 3 * 140 + 2 * 120);
	});
	it('splits evenly when everyone stays everywhere', () => {
		expect(sharePerTraveller(sampleTrip)).toEqual({ Alex: 460, Sam: 460, Noa: 460 });
	});
	it('splits each destination between the travellers staying there', () => {
		const trip: Trip = {
			...sampleTrip,
			destinations: [
				{ ...sampleTrip.destinations[0] }, // 720, all three → 240 each
				{ ...sampleTrip.destinations[1], travellers: ['Alex', 'Sam'] }, // 420 → 210 each
				{ ...sampleTrip.destinations[2], travellers: ['Alex'] }, // 240 → Alex
			],
		};
		expect(sharePerTraveller(trip)).toEqual({ Alex: 690, Sam: 450, Noa: 240 });
	});
	it('rounds shares to the cent', () => {
		const trip: Trip = {
			...sampleTrip,
			destinations: [{ id: 'x', city: 'X', country: 'Y', nights: 1, costPerNight: 100 }],
		};
		expect(sharePerTraveller(trip)).toEqual({ Alex: 33.33, Sam: 33.33, Noa: 33.33 });
	});
});
