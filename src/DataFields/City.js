import React from 'react';
import { WeatherContext } from '../Weather';

export default function City() {
	const { city } = React.useContext( WeatherContext );
	const [ cityValue ] = city;

	return <h1 align="center">{ cityValue }</h1>;
}
