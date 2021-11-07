export default function Temperature( { weather, unit } ) {
	if ( ! weather ) return null;

	let temperature;
	if ( 'metric' === unit ) {
		temperature = `${ weather.temp_c } °C`;
	} else {
		temperature = `${ weather.temp_f } °F`;
	}

	return <h2 align="center">{ temperature }</h2>;
}
