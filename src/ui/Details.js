import React from "react";
import { useSelector } from "react-redux";
import { selectCity } from "../features/City/CitySlices";
import { StyledHours } from "./styled/StyledHours";
import { StyledDays } from "./styled/StyledDays";

const Details = () => {

    const state = useSelector(selectCity);

    return (
        <>
            {state.mainCityDetails.hourly && (
                <StyledHours hours={state.mainCityDetails.hourly}/>
            )}
            {state.mainCityDetails.daily && (
                <StyledDays days={state.mainCityDetails.daily}/>
            )}
        </>
    )
}

export default Details