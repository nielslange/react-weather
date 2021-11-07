import Search from './FormFields/Search';
import Unit from './FormFields/Unit';
import Humidity from './FormFields/Humidity';
import Pressure from './FormFields/Pressure';
import UV from './FormFields/UV';
import Visibility from './FormFields/Visibility';
import Wind from './FormFields/Wind';

export default function WeatherForm( {
	query,
	setQuery,
	city,
	setCity,
	unit,
	setUnit,
	showHumidity,
	setShowHumidity,
	showPressure,
	setShowPressure,
	showUvIndex,
	setShowUvIndex,
	showVisibility,
	setShowVisibility,
	showWind,
	setShowWind,
} ) {
	function handleSubmit( event ) {
		event.preventDefault();
		// Only run setQuery() when old city {query} and new city {city} do not match.
		if ( query !== city ) {
			setQuery( city );
		}
	}

	return (
		<form onSubmit={ handleSubmit }>
			<Search city={ city } setCity={ setCity } />
			<Unit unit={ unit } setUnit={ setUnit } />
			<Wind showWind={ showWind } setShowWind={ setShowWind } />
			<Humidity
				showHumidity={ showHumidity }
				setShowHumidity={ setShowHumidity }
			/>
			<Pressure
				showPressure={ showPressure }
				setShowPressure={ setShowPressure }
			/>
			<Visibility
				showVisibility={ showVisibility }
				setShowVisibility={ setShowVisibility }
			/>
			<UV showUvIndex={ showUvIndex } setShowUvIndex={ setShowUvIndex } />
		</form>
	);
}
