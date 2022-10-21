import React from 'react';
import { WeatherContext } from '../Weather';

export default function Search() {
	const { city } = React.useContext( WeatherContext );
	const [ cityValue, setCityValue ] = city;

	return (
		<>
			<input
				type="search"
				name="search"
				value={ cityValue }
				onChange={ ( event ) => setCityValue( event.target.value ) }
			/>
			<button>Search</button>
		</>
	);
}
