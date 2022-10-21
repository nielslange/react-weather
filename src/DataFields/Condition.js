import React from 'react';
import { WeatherContext } from '../Weather';

export default function Condition() {
	const { weather } = React.useContext( WeatherContext );
	const [ weatherValue ] = weather;

	if ( ! weatherValue ) return null;

	return <p align="center">{ weatherValue.condition.text }</p>;
}
