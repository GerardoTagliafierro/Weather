import React, { useEffect } from "react";
import { selectCity,  setMainCity} from "../features/City/CitySlices";
import { useSelector, useDispatch } from 'react-redux';
import { StyledMiniCity } from "./styled/StyledMiniCity";

const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    minHeight: "400px"
}

const CitySwitch = () => {

    const state = useSelector(selectCity);

    const dispatch = useDispatch();

    const setMainCityHandler = (city) => {
        dispatch(setMainCity(city));
    }

    return ( 
        <div className={"switch"} style={style}>
            <StyledMiniCity 
                setMainCity={setMainCityHandler} 
                data={state.city_0.data} 
                name={state.city_0.name} 
                position={0}
            />
            <StyledMiniCity 
                setMainCity={setMainCityHandler} 
                data={state.city_1.data} 
                name={state.city_1.name} 
                position={1}
            />
            <StyledMiniCity 
                setMainCity={setMainCityHandler} 
                data={state.city_2.data} 
                name={state.city_2.name} 
                position={2}
            />
        </div>
    )
}

export default CitySwitch