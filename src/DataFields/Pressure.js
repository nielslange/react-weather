export default function Pressure( { weather, unit, showPressure } ) {
	if ( ! weather || ! showPressure ) return null;

	let pressure;
	if ( 'metric' === unit ) {
		pressure = `${ weather.pressure_mb } millibars`;
	} else {
		pressure = `${ weather.pressure_in } inches`;
	}

	return (
		<tr>
			<td>Pressure</td>
			<td align="right">{ pressure }</td>
		</tr>
	);
}
