import React from 'react';
import { WeatherContext } from './Weather';

import Search from './FormFields/Search';
import Unit from './FormFields/Unit';
import Humidity from './FormFields/Humidity';
import Pressure from './FormFields/Pressure';
import UV from './FormFields/UV';
import Visibility from './FormFields/Visibility';
import Wind from './FormFields/Wind';

export default function WeatherForm() {
	const { city, query } = React.useContext( WeatherContext );
	const [ cityValue ] = city;
	const [ queryValue, setQueryValue ] = query;

	function handleSubmit( event ) {
		event.preventDefault();
		// Only run setQuery() when old city {query} and new city {city} do not match.
		if ( queryValue !== cityValue ) {
			setQueryValue( cityValue );
		}
	}

	return (
		<form onSubmit={ handleSubmit }>
			<Search />
			<Unit />
			<Wind />
			<Humidity />
			<Pressure />
			<Visibility />
			<UV />
		</form>
	);
}
