import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title } from "./styled/Typography";
import WeatherIcon from "./WeatherIcon";

const Days = ({className, days}) => {

    const [activeTab, setActiveTab] = useState(0);

    return(
        <div className={className}>
            {days && (
                <>
                    <div className="tabs">
                        <div onClick={() => setActiveTab(0)} className={activeTab === 0 ?  "active" : ""}>
                            <Title>This week</Title>
                        </div>
                        <div onClick={() => setActiveTab(1)} className={activeTab === 1 ?  "active" : ""}>
                            <Title>This Month</Title>
                        </div>
                    </div>
                    <div className={"card active-" + activeTab}>
                        {activeTab === 0 ? (
                            <Swiper
                                slidesPerView={1}
                                slidesPerGroup={1}
                                breakpoints={{
                                    768: {
                                      slidesPerView: 3,
                                      slidesPerGroup: 3
                                    },
                                  }}
                            >
                                { days && days.map((item, i) =>{
                                    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                                    const date = new Date(item.dt *1000);
                                    const temp = Math.round(item.temp.day - 273.15);
                                    return(
                                        <SwiperSlide key={i}>
                                            <div className="slide-content">
                                                <p className="day">
                                                    {weekday[date.getDay()]}
                                                </p>
                                                <p className="temp">
                                                    {temp}°
                                                </p>
                                                {item.weather && item.weather[0] && (
                                                    <WeatherIcon icon={item.weather[0].icon}/>
                                                )}
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        ):(
                            <></>
                        )}

                    </div>
                </>
            )}

        </div>
    )
}

export default Days