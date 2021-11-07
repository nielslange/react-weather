export default function Unit( { unit, setUnit } ) {
	return (
		<label htmlFor="unit">
			Unit:
			<select
				onChange={ ( event ) => setUnit( event.target.value ) }
				value={ unit }
			>
				<option value="metric">Metric</option>
				<option value="imperial">Imperial</option>
			</select>
		</label>
	);
}
