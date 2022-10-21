import React from 'react';
import { WeatherContext } from '../Weather';

export default function Visibility() {
	const { weather, unit, showVisibility } = React.useContext(
		WeatherContext
	);
	const [ weatherValue ] = weather;
	const [ unitValue ] = unit;
	const [ showVisibilityValue ] = showVisibility;

	if ( ! weatherValue || ! showVisibilityValue ) return null;

	const visibility =
		'metric' === unitValue
			? `${ weatherValue.vis_km } km`
			: `${ weatherValue.vis_miles } miles`;

	return (
		<tr>
			<td>Visibility</td>
			<td align="right">{ visibility }</td>
		</tr>
	);
}
