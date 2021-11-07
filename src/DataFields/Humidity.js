export default function Humidity( { weather, showHumidity } ) {
	if ( ! weather || ! showHumidity ) return null;

	const humidity = `${ weather.humidity }%`;

	return (
		<tr>
			<td>Humidity</td>
			<td align="right">{ humidity }</td>
		</tr>
	);
}
