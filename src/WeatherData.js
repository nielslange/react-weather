import City from './DataFields/City';
import Icon from './DataFields/Icon';
import Condition from './DataFields/Condition';
import Temperature from './DataFields/Temperature';
import Wind from './DataFields/Wind';
import Humidity from './DataFields/Humidity';
import Pressure from './DataFields/Pressure';
import Visibility from './DataFields/Visibility';
import UV from './DataFields/UV';

export default function WeatherData() {
	return (
		<>
			<City />
			<Icon />
			<Condition />
			<Temperature />

			<table>
				<tbody>
					<Wind />
					<Humidity />
					<Pressure />
					<Visibility />
					<UV />
				</tbody>
			</table>
		</>
	);
}
