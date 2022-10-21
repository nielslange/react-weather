import React from 'react';
import { WeatherContext } from '../Weather';

export default function Humidity() {
	const { weather, showHumidity } = React.useContext( WeatherContext );
	const [ weatherValue ] = weather;
	const [ showHumidityValue ] = showHumidity;

	if ( ! weatherValue || ! showHumidityValue ) return null;

	const humidity = `${ weatherValue.humidity }%`;

	return (
		<tr>
			<td>Humidity</td>
			<td align="right">{ humidity }</td>
		</tr>
	);
}
