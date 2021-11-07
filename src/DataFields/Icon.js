export default function Icon( { weather } ) {
	if ( ! weather ) return null;

	return (
		<p align="center">
			<img
				src={ weather.condition.icon }
				alt={ weather.condition.text }
			/>
		</p>
	);
}
