import React from "react";
import Cloudy from "../assets/Cloudy.png"
import Sunny from "../assets/Sunny.png"
import Snowy from "../assets/Snowy.png"
import Rainy from "../assets/Rainy.png"


const WeatherIcon = ({icon}) =>{

    const parseIcon = (icon) => {
        switch (icon) {
            case "02d":
            case "03d":
            case "04d":
            case "04d":
                return Cloudy
            case "01d":
            case "01n":
                return Sunny
            case "13d":
                return Snowy
            case "10d":
            case "13d":
            case "09d":
            case "11d":
                return Rainy
            default:
                return Cloudy
        }
    }

      
    return <img src={parseIcon(icon)}></img>
}
export default WeatherIcon;