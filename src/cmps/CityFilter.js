import React from 'react';


function CityFilter() {

  return (
    <div className="city-filter">
      <input type="text" placeholder="Search another city" />
    </div>
  );
}

export default React.memo(CityFilter);