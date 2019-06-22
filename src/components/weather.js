import React from 'react';

function getTime (ms) {
	let time = new Date(ms);
	return time.toLocaleTimeString();
}

function Weather (props) {
	if (props.weather.city) {
		let sunrise = getTime(props.weather.sunrise),
			sunset = getTime(props.weather.sunset),
			pressure = (props.weather.pressure * 100 / 133.3224).toFixed(1);

		return (
        	<ul className="list-group mt-3">
                <li className="list-group-item list-background">Местоположение: {props.weather.city}, {props.country}</li>
                <li className="list-group-item list-background">Температура: <strong>{props.weather.temp}</strong></li>
                <li className="list-group-item list-background">Давление: <strong>{pressure}</strong> мм. рт. ст.</li>
                <li className="list-group-item list-background">Восход солнца: <strong>{sunrise}</strong></li>
                <li className="list-group-item list-background">Закат: <strong>{sunset}</strong></li>
        	</ul>
    	);
	} else {
		return (
			<div>{props.weather.error}</div>
		);
	}
}

export default Weather;