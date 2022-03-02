import React, {useState} from "react";
import { Title } from "./styled/Typography";
import { useSelector, useDispatch } from "react-redux";
import { selectCity, setCityData, setMainCity} from "../features/City/CitySlices";
import { getWeatherByCityName, getWeatherByCoords } from "../api/fetchData";
import Search from "../assets/Search.png"
import Location from "../assets/Location.png"

const CityForm = ({className}) => {

    const state = useSelector(selectCity);

    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const changeHandler =  (e) => {
        setValue(e.target.value);
    }

    const searchHandler  = () => {
        const position = state.mainCity.position !== undefined ? state.mainCity.position : 0;

        const fetchData = async () => {

            const res = await getWeatherByCityName(value);

            if (res.data){
                dispatch(setCityData({name: res.data.name, data: res.data, position: position}));
                dispatch(setMainCity({name: res.data.name, data: res.data, position: position}));
            }

        };

        fetchData();
    }

    const localzationHandler = () => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos) => {
                const position = state.mainCity.position !== undefined ? state.mainCity.position : 0;

                const fetchData = async () => {
        
                    const res = await getWeatherByCoords({lat:pos.coords.latitude, lon:pos.coords.longitude});
        
                    if (res.data){
                        dispatch(setCityData({name: res.data.name, data: res.data, position: position}));
                        dispatch(setMainCity({name: res.data.name, data: res.data, position: position}));
                    }
        
                };
        
                fetchData();
            })
        }
    }

    return (
        <div className={className}>
            <div className="title-wrapper">
                <Title>Search City</Title>
            </div>
            <div className="card input-wrapper">
                <input name="city-name"
                    value={value}
                    placeholder="ex. Miami"
                    onChange={(e) => changeHandler(e)}
                    className="input" 
                    valuetype="text"/>
                <button className={"card button-search"} onClick={() => searchHandler(value)}>
                    <img src={Search}/>
                </button>
            </div>
            <div className="title-wrapper">
                <Title>Localization</Title>
            </div>
            <button onClick={() => localzationHandler()} className="card localization-button">
                <img src={Location}/>
                Add localization
            </button>
        </div>
    )
}

export default CityForm