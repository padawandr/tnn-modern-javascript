// accuweather api 
// free version: max 50 locations per hour

class Forecast {

  constructor() {
    this.apiKey = 'uGOTUve92an1wrvUaqXA90jIP7jVDONv';
    this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
  }

  async getCity(city) {
    const query = `?apikey=${this.apiKey}&q=${city}`;
    const response = await fetch(this.cityURL + query);
    const data = await response.json();
    return data[0];
  }

  async getWeather(locKey) {
    const query = `${locKey}?apikey=${this.apiKey}`;
    const response = await fetch(this.weatherURL + query);
    const data = await response.json();
    return data[0];
  }

  async updateCity(city) {
    const cityInfo = await this.getCity(city);
    const cityWeather = await this.getWeather(cityInfo.Key);
    return { cityInfo, cityWeather };
  }

}
