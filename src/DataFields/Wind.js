import React from 'react';
import { WeatherContext } from '../Weather';

export default function Wind() {
	const { weather, unit, showWind } = React.useContext( WeatherContext );
	const [ weatherValue ] = weather;
	const [ unitValue ] = unit;
	const [ showWindValue ] = showWind;

	if ( ! weatherValue || ! showWindValue ) return null;

	const wind =
		'metric' === unitValue
			? `${ weatherValue.wind_kph } km/h`
			: `${ weatherValue.wind_mph } miles/h`;

	return (
		<tr>
			<td>Wind</td>
			<td align="right">{ wind }</td>
		</tr>
	);
}
