const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateCard = (data) => {

  // destructuring
  const { cityInfo, cityWeather } = data;

  // update day/night image
  const imgSrc = cityWeather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', imgSrc);

  // update weather icon
  const iconSrc = `img/icons/${cityWeather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  // update city/weather details
  details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${cityWeather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${cityWeather.Temperature.Metric.Value}</span>
      <span>&deg;c</span>
    </div>
  `;

  // unhide card if first search
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

};

cityForm.addEventListener('submit', e => {

  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  forecast.updateCity(city)
    .then(data => updateCard(data))
    .catch(err => console.log(err));

  // save on local storage
  localStorage.setItem('city', city);

});

// check local storage
if (localStorage.getItem('city')) {
  forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateCard(data))
    .catch(err => console.log(err));
}
