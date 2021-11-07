export default function Visibility( { showVisibility, setShowVisibility } ) {
	return (
		<label htmlFor="visibility">
			<input
				type="checkbox"
				id="visibility"
				checked={ showVisibility }
				onChange={ ( event ) => {
					setShowVisibility( event.target.checked );
				} }
			/>
			Show visibility
		</label>
	);
}
