import React from 'react';
import { WeatherContext } from '../Weather';

export default function Icon() {
	const { weather } = React.useContext( WeatherContext );
	const [ weatherValue ] = weather;

	if ( ! weatherValue ) return null;

	return (
		<p align="center">
			<img
				src={ weatherValue.condition.icon }
				alt={ weatherValue.condition.text }
			/>
		</p>
	);
}
