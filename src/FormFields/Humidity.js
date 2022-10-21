import React from 'react';
import { WeatherContext } from '../Weather';

export default function Humidity() {
	const { showHumidity } = React.useContext( WeatherContext );
	const [ showHumidityValue, setShowHumidityValue ] = showHumidity;

	return (
		<label htmlFor="humidity">
			<input
				type="checkbox"
				id="humidity"
				checked={ showHumidityValue }
				onChange={ ( event ) => {
					setShowHumidityValue( event.target.checked );
				} }
			/>
			Show humidity
		</label>
	);
}
