import React from 'react';
import { WeatherContext } from '../Weather';

export default function UV() {
	const { showUvIndex } = React.useContext( WeatherContext );
	const [ showUvIndexValue, setShowUvIndexValue ] = showUvIndex;

	return (
		<label htmlFor="uv">
			<input
				type="checkbox"
				id="uv"
				checked={ showUvIndexValue }
				onChange={ ( event ) => {
					setShowUvIndexValue( event.target.checked );
				} }
			/>
			Show UV index
		</label>
	);
}
