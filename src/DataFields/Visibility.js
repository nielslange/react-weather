export default function Visibility( { weather, unit, showVisibility } ) {
	if ( ! weather || ! showVisibility ) return null;

	let visibility;
	if ( 'metric' === unit ) {
		visibility = `${ weather.vis_km } km`;
	} else {
		visibility = `${ weather.vis_miles } miles`;
	}

	return (
		<tr>
			<td>Visibility</td>
			<td align="right">{ visibility }</td>
		</tr>
	);
}
