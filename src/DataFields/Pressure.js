import React from 'react';
import { WeatherContext } from '../Weather';

export default function Pressure() {
	const { weather, unit, showPressure } = React.useContext( WeatherContext );
	const [ weatherValue ] = weather;
	const [ unitValue ] = unit;
	const [ showPressureValue ] = showPressure;

	if ( ! weatherValue || ! showPressureValue ) return null;

	const pressure =
		'metric' === unitValue
			? `${ weatherValue.pressure_mb } millibars`
			: `${ weatherValue.pressure_in } inches`;

	return (
		<tr>
			<td>Pressure</td>
			<td align="right">{ pressure }</td>
		</tr>
	);
}
