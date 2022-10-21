import React from 'react';
import { WeatherContext } from '../Weather';

export default function Visibility() {
	const { showVisibility } = React.useContext( WeatherContext );
	const [ showVisibilityValue, setShowVisibilityValue ] = showVisibility;

	return (
		<label htmlFor="visibility">
			<input
				type="checkbox"
				id="visibility"
				checked={ showVisibilityValue }
				onChange={ ( event ) => {
					setShowVisibilityValue( event.target.checked );
				} }
			/>
			Show visibility
		</label>
	);
}
