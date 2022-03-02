import React from 'react';
import './App.css';
import CitySwitch from './ui/CitySwitch';
import { StyledMainCity } from './ui/styled/StyledMainCity';
import { StyledCityForm } from './ui/styled/StyledCityForm'
import Details from './ui/Details';

function App() {
  return (
    <div className="App">
         <div className='container'>
            <StyledMainCity/>
            <CitySwitch/>
            <Details/>
            <StyledCityForm/>
         </div>
    </div>
  );
}

export default App;
