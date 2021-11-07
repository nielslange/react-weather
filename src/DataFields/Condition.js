export default function Condition( { weather } ) {
	if ( ! weather ) return null;

	return <p align="center">{ weather.condition.text }</p>;
}
