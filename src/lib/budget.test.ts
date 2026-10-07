import { describe, it, expect } from 'vitest';
import { tripTotal, sharePerTraveller } from './budget';
import { sampleTrip } from '../data/sampleTrip';

describe('budget', () => {
	it('sums nights × cost per night', () => {
		expect(tripTotal(sampleTrip)).toBe(4 * 180 + 3 * 140 + 2 * 120);
	});
	it('splits evenly between travellers', () => {
		expect(sharePerTraveller(sampleTrip)).toBe(460);
	});
});
