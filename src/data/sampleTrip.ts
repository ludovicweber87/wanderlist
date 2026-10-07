import type { Trip } from '../lib/types';

export const sampleTrip: Trip = {
	id: 'japan-2026',
	name: 'Japan in spring',
	startDate: '2026-04-02',
	travellers: ['Alex', 'Sam', 'Noa'],
	destinations: [
		{ id: 'tyo', city: 'Tokyo', country: 'Japan', nights: 4, costPerNight: 180 },
		{ id: 'kyo', city: 'Kyoto', country: 'Japan', nights: 3, costPerNight: 140 },
		{ id: 'osa', city: 'Osaka', country: 'Japan', nights: 2, costPerNight: 120 },
	],
};
