const url = 'https://rapidweather.p.rapidapi.com/data/2.5/forecast?q=London%2CUK';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5a7bb50adcmshac9e25f8af46456p184813jsn774e0b587eb5',
		'x-rapidapi-host': 'rapidweather.p.rapidapi.com'
	}
};

async function fetchWeather() {

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchWeather();   