import React, { useState, useEffect } from 'react';

import DaysList from '../cmps/DaysList';
import CityFilter from '../cmps/CityFilter';
import WeatherService from '../services/WeatherService';


function WeatherPage() {

  const [threeDays, setDays] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [recentFilter, setRecentFilter] = useState('');

  useEffect(() => {
    (async () => {
      const serviceDays = await WeatherService.getThreeDays(0);
      setDays(serviceDays);
    })();
  }, []);

  const filterCitys = newFilter => {
    setRecentFilter(newFilter);
    console.log(newFilter);
  }
  const togglePage = async () => {
    if (pageNumber === 0) {
      const serviceDays = await WeatherService.getThreeDays(1);
      setDays(serviceDays);
      setPageNumber(1);
    } else {
      const serviceDays = await WeatherService.getThreeDays(0);
      setDays(serviceDays);
      setPageNumber(0);
    }
  }

  return (
    <div className="weather-page">
      <div className="main flex-col">
        <CityFilter onFilter={filterCitys} />
        <div className="display-weather">
          <div className="arrow-icon">
            <img className={pageNumber ? 'rotate180' : ''}
              onClick={togglePage} src="assets/img/icons/arrow.png" alt="Arrow" title="Arrow" />
          </div>
          <div className="today">
            <div>
              <label>NEW YORK</label>
              <label>today</label>
            </div>
            <label>23°</label>
            <label>sunny</label>
          </div>
          {threeDays &&
            <DaysList list={threeDays} />
          }
        </div>
      </div>
    </div>
  );
}

export default React.memo(WeatherPage);