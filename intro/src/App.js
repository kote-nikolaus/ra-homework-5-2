import './App.css';
import React from 'react';
import Section from './components/Section';
import NewsList from './components/NewsList';
import ExchangeRateList from './components/ExchangeRateList';
import WeatherList from './components/WeatherList';
import FavoritesList from './components/FavoritesList';
import TVShowsList from './components/TVShowsList';
import TranslationsList from './components/TranslationsList';
import SearchWidget from './components/SearchWidget';


let news = [
  {
    icon: 'https://avatars.mds.yandex.net/get-ynews-logo/28627/1014-1583822440403-square/logo-square',
    text: 'Путин и Шойгу поехали в тайгу',
    link: 'https://yandex.ru/news/story/Putin_i_SHojgu_provodyat_vykhodnye_naotdykhe_vtajge--018df67b6c4b8a529e055398b073fee9?fan=1&from=main_portal&lang=ru&lr=213&mlid=1616362977.glob_225.018df67b&msid=1616363512.79616.82580.948339&persistent_id=136032564&stid=v8Cj8hAFYGo_g2UhQBlw&t=1616362977&utm_medium=topnews_news&utm_source=morda_desktop'
  },
  {
    icon: 'https://avatars.mds.yandex.net/get-ynews-logo/26056/1047-1478692902215-square/logo-square',
    text: 'Пензенского губернатора задержали за взятку в 30 миллионов',
    link: 'https://yandex.ru/news/story/Penzenskogo_gubernatora_zaderzhali_zavzyatku_v30_millionov--bfc1ea77946e422380e24981e4dac540?fan=1&from=main_portal&lang=ru&lr=213&mlid=1616364003.glob_225.bfc1ea77&msid=1616364595.96034.85638.964844&persistent_id=136023215&stid=alHYHRHWFBP5DgkgTRaJ&t=1616364003&utm_medium=topnews_news&utm_source=morda_desktop'
  },
]

let exchangeRates = [
  {
    name: 'USD',
    course: '76,3',
    fluctuation: '+1,4',
  },
  {
    name: 'EUR',
    course: '90,4',
    fluctuation: '+1,03',
  },
  {
    name: 'НЕФТЬ',
    course: '60,4',
    fluctuation: '-6,1%',
  },
]

let weatherData = [
  {
    time: '12:00',
    weather: '-2',
    icon: '🌞',
  },
  {
    time: '15:00',
    weather: '0',
    icon: '❄',
  },
  {
    time: '18:00',
    weather: '-1',
    icon: '❄',
  },
]

let favorites = [
  {
    service: 'Недвижимость',
    description: 'о сталинках',
    link: 'https://realty.yandex.ru/',
  },
  {
    service: 'Маркет',
    description: 'люстры и светильники',
    link: 'https://market.yandex.ru/',
  }
]

let services = [
  {
    name: 'Видео',
    link: 'https://yandex.ru/video/',
  },
  {
    name: 'Картинки',
    link: 'https://yandex.ru/images/',
  },
  {
    name: 'Карты',
    link: 'https://yandex.ru/maps/',
  },
]

let TVShows = [
  {
    name: 'Самые шокирующие гипотезы',
    time: '2:00',
    channel: 'РЕН ТВ',
    link: 'https://tv.yandex.ru/program/samye-shokiruyushchie-gipotezy-5405685?eventId=173798174',
  },
  {
    name: 'Давай поженимся',
    time: '2:35',
    channel: 'Первый',
    link: 'https://tv.yandex.ru/program/davay-pojenimsya-5405639?eventId=174072264',
  },
]

let translations = [
  {
    name: 'Картина дня',
    channel: 'Дождь',
    link: 'https://yandex.ru/efir?stream_channel=384',
  },
  {
    name: 'Доктор 24',
    channel: 'Москва 24',
    link: 'https://yandex.ru/efir?stream_channel=334',
  },
]

function App() {
  return (
    <React.Fragment>
      <Section title='Сейчас в СМИ'>
        <NewsList items={news}/>
        <ExchangeRateList items={exchangeRates}/>
      </Section>

      <SearchWidget items={services} suggestion='фаза луны сегодня'/>

      <Section title='Работа над ошибками'>
        <p>Смотрите и запоминайте</p>
      </Section>

      <Section title='Погода'>
        <WeatherList items={weatherData}/>
      </Section>

      <Section title='Посещаемое'>
        <FavoritesList items={favorites}/>
      </Section>

      <Section title='Телепрограмма'>
        <TVShowsList items={TVShows}/>
      </Section>

      <Section title='Эфир'>
        <TranslationsList items={translations}/>
      </Section>
    </React.Fragment>
  );
}

export default App;
