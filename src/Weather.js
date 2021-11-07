import { useState, useEffect } from 'react';
import env from 'react-dotenv';
import WeatherData from './WeatherData';
import WeatherForm from './WeatherForm';

export default function Weather() {
	const [ weather, setWeather ] = useState();
	const [ query, setQuery ] = useState();
	const [ city, setCity ] = useState( 'Jakarta' );
	const [ unit, setUnit ] = useState( 'metric' );
	const [ showHumidity, setShowHumidity ] = useState( true );
	const [ showPressure, setShowPressure ] = useState( true );
	const [ showUvIndex, setShowUvIndex ] = useState( true );
	const [ showVisibility, setShowVisibility ] = useState( true );
	const [ showWind, setShowWind ] = useState( true );

	const appid = env.API_KEY;
	const url = `http://api.weatherapi.com/v1/current.json?key=${ appid }&q=${ city }&aqi=no`;

	const getWeather = async () => {
		const response = await fetch( url );
		const result = await response.json();
		setWeather( result.current );
		console.warn( 'API call triggered!' );
	};

	useEffect( () => {
		getWeather();
	}, [ query ] );

	return (
		<div className="container">
			<WeatherData
				weather={ weather }
				city={ city }
				unit={ unit }
				showHumidity={ showHumidity }
				showPressure={ showPressure }
				showUvIndex={ showUvIndex }
				showVisibility={ showVisibility }
				showWind={ showWind }
			/>
			<WeatherForm
				query={ query }
				setQuery={ setQuery }
				city={ city }
				setCity={ setCity }
				unit={ unit }
				setUnit={ setUnit }
				showHumidity={ showHumidity }
				setShowHumidity={ setShowHumidity }
				showPressure={ showPressure }
				setShowPressure={ setShowPressure }
				showUvIndex={ showUvIndex }
				setShowUvIndex={ setShowUvIndex }
				showVisibility={ showVisibility }
				setShowVisibility={ setShowVisibility }
				showWind={ showWind }
				setShowWind={ setShowWind }
			/>
		</div>
	);
}
