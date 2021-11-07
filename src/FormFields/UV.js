export default function UV( { showUvIndex, setShowUvIndex } ) {
	return (
		<label htmlFor="uv">
			<input
				type="checkbox"
				id="uv"
				checked={ showUvIndex }
				onChange={ ( event ) => {
					setShowUvIndex( event.target.checked );
				} }
			/>
			Show UV index
		</label>
	);
}
