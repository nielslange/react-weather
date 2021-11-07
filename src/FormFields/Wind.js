export default function Wind( { showWind, setShowWind } ) {
	return (
		<label htmlFor="wind">
			<input
				type="checkbox"
				id="wind"
				checked={ showWind }
				onChange={ ( event ) => {
					setShowWind( event.target.checked );
				} }
			/>
			Show wind
		</label>
	);
}
