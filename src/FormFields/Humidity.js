export default function Humidity( { showHumidity, setShowHumidity } ) {
	return (
		<label htmlFor="humidity">
			<input
				type="checkbox"
				id="humidity"
				checked={ showHumidity }
				onChange={ ( event ) => {
					setShowHumidity( event.target.checked );
				} }
			/>
			Show humidity
		</label>
	);
}
