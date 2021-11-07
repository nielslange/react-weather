export default function UV( { weather, showUvIndex } ) {
	if ( ! weather || ! showUvIndex ) return null;

	return (
		<tr>
			<td>UV</td>
			<td align="right">{ weather.uv }</td>
		</tr>
	);
}
