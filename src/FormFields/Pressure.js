import React from 'react';
import { WeatherContext } from '../Weather';

export default function Pressure() {
	const { showPressure } = React.useContext( WeatherContext );
	const [ showPressureValue, setShowPressureValue ] = showPressure;

	return (
		<label htmlFor="pressure">
			<input
				type="checkbox"
				id="pressure"
				checked={ showPressureValue }
				onChange={ ( event ) => {
					setShowPressureValue( event.target.checked );
				} }
			/>
			Show pressure
		</label>
	);
}
