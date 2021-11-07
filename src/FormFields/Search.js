export default function Search( { city, setCity } ) {
	return (
		<>
			<input
				type="search"
				name="search"
				value={ city }
				onChange={ ( event ) => setCity( event.target.value ) }
			/>
			<button>Search</button>
		</>
	);
}
