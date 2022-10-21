import React from 'react';
import { WeatherContext } from '../Weather';

export default function UV() {
	const { weather, showUvIndex } = React.useContext( WeatherContext );
	const [ weatherValue ] = weather;
	const [ showUvIndexValue ] = showUvIndex;

	if ( ! weatherValue || ! showUvIndexValue ) return null;

	return (
		<tr>
			<td>UV</td>
			<td align="right">{ weatherValue.uv }</td>
		</tr>
	);
}
