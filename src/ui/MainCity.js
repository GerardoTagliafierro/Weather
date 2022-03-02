import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCity, setMainCityDetails } from "../features/City/CitySlices";
import LocalDate from "./LocalDate";
import WeatherIcon from "./WeatherIcon";
import { parseBgAsIcon } from "../utils/cardbg";
import { getForecastByCityCoord } from "../api/fetchData";
import { useDispatch } from "react-redux";

const MainCity = ({className}) => {

    const state = useSelector(selectCity);
    
    const {name, data} = state.mainCity;
    
    const dispatch = useDispatch();

    useEffect(()=>{
        if (data && data.coord){
            const fetchData = async () => {
                const res = await getForecastByCityCoord({...data.coord});
                    dispatch(setMainCityDetails(res.data));
              };
            fetchData();
        }
    },[name])
    
    return (
        <div className={className + " card"} style={{backgroundImage: parseBgAsIcon(data && data.weather ? data.weather[0].icon : "")}}> 
            { data && data.weather ? (
                <>
                    <div className="text">
                        <h1 className="name">{name}</h1>
                        <LocalDate timezone={data.timezone} />
                        <p>{data.weather[0].main}</p>
                    </div>
                    <div className="elevated card">
                        <div className="temp">
                            <p>{Math.round(data.main.temp - 273.15)}°</p>
                        </div>
                        <div>
                            <WeatherIcon  icon={data.weather[0].icon}/>
                        </div>
                    </div>
                </>
            ):(
                <div className="text">
                    <h1 className="name">Choose a city!</h1>
                    <p>Click a city to display weather details.</p>
                </div>
            )}
        </div>
    )
}

export default MainCity