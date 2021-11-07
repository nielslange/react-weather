export default function Pressure( { showPressure, setShowPressure } ) {
	return (
		<label htmlFor="pressure">
			<input
				type="checkbox"
				id="pressure"
				checked={ showPressure }
				onChange={ ( event ) => {
					setShowPressure( event.target.checked );
				} }
			/>
			Show pressure
		</label>
	);
}
