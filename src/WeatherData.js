import City from './DataFields/City';
import Icon from './DataFields/Icon';
import Condition from './DataFields/Condition';
import Temperature from './DataFields/Temperature';
import Wind from './DataFields/Wind';
import Humidity from './DataFields/Humidity';
import Pressure from './DataFields/Pressure';
import Visibility from './DataFields/Visibility';
import UV from './DataFields/UV';

export default function WeatherData( {
	weather,
	city,
	unit,
	showWind,
	showHumidity,
	showPressure,
	showVisibility,
	showUvIndex,
} ) {
	return (
		<>
			<City city={ city } />
			<Icon weather={ weather } />
			<Condition weather={ weather } />
			<Temperature weather={ weather } unit={ unit } />

			<table>
				<tbody>
					<Wind
						weather={ weather }
						unit={ unit }
						showWind={ showWind }
					/>
					<Humidity
						weather={ weather }
						showHumidity={ showHumidity }
					/>
					<Pressure
						weather={ weather }
						unit={ unit }
						showPressure={ showPressure }
					/>
					<Visibility
						weather={ weather }
						unit={ unit }
						showVisibility={ showVisibility }
					/>
					<UV weather={ weather } showUvIndex={ showUvIndex } />
				</tbody>
			</table>
		</>
	);
}
