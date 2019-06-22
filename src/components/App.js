import React from "react";
import Info from './info';
import Form from './form';
import Weather from './weather';
const API_KEY = '605dee0adbec8f4e15a1f60f098fdc45';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			temp: null,
			pressure: null,
			city: null,
			country: null,
			sunrise: null,
			sunset: null,
			error: null
		};
		this.gettingWeather = this.gettingWeather.bind(this);
	}

	async gettingWeather (event) {
		event.preventDefault();
		let city = event.target.elements.city.value;
		if (city) {
			const getInfo = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
			);
			const data = await getInfo.json();
			console.log(data);
			if (data.cod == '200') {
				this.setState({
					temp: data.main.temp,
					pressure: data.main.pressure,
					city: data.name,
					country: data.sys.country,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					error: null
				});
			} else {
				this.setState({
					temp: null,
					pressure: null,
					city: null,
					country: null,
					sunrise: null,
					sunset: null,
					error: `Cod: ${data.cod}, Error: ${data.message}`
				});
			}
		} else {
			this.setState({
				temp: null, // упростить
				pressure: null,
				city: null,
				country: null,
				sunrise: null,
				sunset: null,
				error: 'Введите название города!'
			})
		}
	}

    render() {
    	console.log('redndering');
        return (
            <div className="panel-content">
                <Info />
                <Form weatherMethod={this.gettingWeather}/>
                <Weather weather={this.state} />
            </div>
        );
    }
}

export default App;