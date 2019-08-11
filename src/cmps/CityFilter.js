import React from 'react';

function CityFilter() {

  return (
    <div className="city-filter flex space-even align-center">
      <div className="wrap-img flex space-center align-center">
        <img src="assets/img/icons/search.png" alt="Search" title="Search"/>
      </div>
      <input type="text" placeholder="Search another city" />
    </div>
  );
}

export default React.memo(CityFilter);