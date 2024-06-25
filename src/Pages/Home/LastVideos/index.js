import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import './style.css'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import new1 from '../../../assets/employees.jpeg'
import new2 from '../../../assets/employees1.jpeg'
import 'swiper/css/navigation';

const LastVideos = () => {
    const [videos, setVideos] = useState([
        {title: 'النفط يتراجع متأثراً بصعودالدولار وسط مخاوف «الفائدة المرتفعة» النفط يتراجع متأثراً بصعودالدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', img: new2},
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', img: new2},
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', img: new2},
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', img: new2},
    ])
    return <div className="videos custom-container">
        <div className="video">
            <div style={{overflow: 'hidden'}}>
                <div className="titles">
                    <p>آخر الفيديوهات</p>
                    <a href='#' className="view_all">مشاهده الكل</a>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    modules={[Navigation]}
                    navigation
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    }}
                    className="mySwiper"
                >
                    {videos?.map((important,index)=>{
                    return <SwiperSlide key={index}>
                        <div style={{backgroundImage: `url(${important?.img})`}} className="vid">
                            <div className="details">
                                <p className="since">منذ {important?.time}</p>
                                <p className="title">{important?.title}</p>
                            </div>
                            <i class="bi bi-play-circle-fill play"></i>
                        </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </div>
}
export default LastVideos;