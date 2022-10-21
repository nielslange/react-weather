import React from 'react';
import { WeatherContext } from '../Weather';

export default function Wind() {
	const { showWind } = React.useContext( WeatherContext );
	const [ showWindValue, setShowWindValue ] = showWind;

	return (
		<label htmlFor="wind">
			<input
				type="checkbox"
				id="wind"
				checked={ showWindValue }
				onChange={ ( event ) => {
					setShowWindValue( event.target.checked );
				} }
			/>
			Show wind
		</label>
	);
}
