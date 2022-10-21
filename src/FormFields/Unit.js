import React from 'react';
import { WeatherContext } from '../Weather';

export default function Unit() {
	const { unit } = React.useContext( WeatherContext );
	const [ unitValue, setUnitValue ] = unit;

	return (
		<label htmlFor="unit">
			Unit:
			<select
				onChange={ ( event ) => setUnitValue( event.target.value ) }
				value={ unitValue }
			>
				<option value="metric">Metric</option>
				<option value="imperial">Imperial</option>
			</select>
		</label>
	);
}
