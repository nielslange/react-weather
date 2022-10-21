import React from 'react';
import { useState, useEffect, createContext } from 'react';
import env from 'react-dotenv';
import WeatherData from './WeatherData';
import WeatherForm from './WeatherForm';

export const WeatherContext = createContext();

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

	const WeatherContextValue = {
		weather: [ weather ],
		query: [ query, setQuery ],
		city: [ city, setCity ],
		unit: [ unit, setUnit ],
		showHumidity: [ showHumidity, setShowHumidity ],
		showPressure: [ showPressure, setShowPressure ],
		showUvIndex: [ showUvIndex, setShowUvIndex ],
		showVisibility: [ showVisibility, setShowVisibility ],
		showWind: [ showWind, setShowWind ],
	};

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
	} );

	console.table( WeatherContextValue );

	return (
		<div className="container">
			<WeatherContext.Provider value={ WeatherContextValue }>
				<WeatherData />
				<WeatherForm />
			</WeatherContext.Provider>
		</div>
	);
}
