import React, { useEffect, useState } from "react";
import { getWeatherByCityName } from "../api/fetchData";
import LocalDate from "./LocalDate";
import LocalHour from "./LocalHour";
import WeatherIcon from "./WeatherIcon";
import { useDispatch } from "react-redux";
import { setCityData } from "../features/City/CitySlices";
import { parseGradientAsIcon } from "../utils/cardbg";

const MiniCity = ({className, name, data, setMainCity, position}) => {

    
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData = async () => {
            const res = await getWeatherByCityName(name);
            dispatch(setCityData({data: res.data, position: position}));
          };
        fetchData();
    },[name])

    return(
        <div className={className + " card"} 
            style={{backgroundImage: parseGradientAsIcon(data && data.weather ? data.weather[0].icon : "")}}
            onClick={() => setMainCity({name: name, data: { ...data}, position: position})}>
            <div className="text">
                <p className="name">{name}</p>
                <LocalDate timezone={data.timezone} />
                <LocalHour timezone={data.timezone} /> 
            </div>
            { data.weather && (
                <>
                    <div >
                        <WeatherIcon  icon={data.weather[0].icon}/>
                    </div>
                    <div className="temp">
                        <p>{Math.round(data.main.temp - 273.15)}°</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default MiniCity