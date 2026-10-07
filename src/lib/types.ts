export interface Destination {
	id: string;
	city: string;
	country: string;
	nights: number;
	costPerNight: number;
}

export interface Trip {
	id: string;
	name: string;
	startDate: string; // YYYY-MM-DD
	travellers: string[];
	destinations: Destination[];
}
