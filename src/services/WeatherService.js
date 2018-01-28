import axios from 'axios';

export default {
  apiEndpoint: 'http://api.openweathermap.org/data/2.5',
  apiKey: 'f77b387c8ccfe5707bd4c6da191c12f7',
  
  authParams() {
    return 'APPID=' + this.apiKey;
  },
  fetchLocationyWeather(location) {
    return axios.get(this.apiEndpoint + '/forecast?q=' + location + '&cnt=5&' + this.authParams())
    
      .then((response) => {
        return response.data;
      });
  }
}