import { sampleTrip } from './data/sampleTrip';
import { TripSummary } from './components/TripSummary';
import { Itinerary } from './components/Itinerary';

export default function App() {
	return (
		<main>
			<h1>Wanderlist</h1>
			<TripSummary trip={sampleTrip} />
			<Itinerary trip={sampleTrip} />
		</main>
	);
}
