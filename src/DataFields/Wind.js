export default function Wind( { weather, unit, showWind } ) {
	if ( ! weather || ! showWind ) return null;

	let wind;
	if ( 'metric' === unit ) {
		wind = `${ weather.wind_kph } km/h`;
	} else {
		wind = `${ weather.wind_mph } miles/h`;
	}

	return (
		<tr>
			<td>Wind</td>
			<td align="right">{ wind }</td>
		</tr>
	);
}
