import React from 'react';
import { WeatherContext } from '../Weather';

export default function Temperature() {
	const { weather, unit } = React.useContext( WeatherContext );
	const [ weatherValue ] = weather;
	const [ unitValue ] = unit;

	if ( ! weatherValue ) return null;

	const temperature =
		'metric' === unitValue
			? `${ weatherValue.temp_c } °C`
			: `${ weatherValue.temp_f } °F`;

	return <h2 align="center">{ temperature }</h2>;
}
