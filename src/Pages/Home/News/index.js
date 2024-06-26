import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import './style.css'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import new1 from '../../../assets/employees.jpeg'
import new2 from '../../../assets/employees1.jpeg'
import 'swiper/css/navigation';
const News = () => {
    const [newNews, setNewNews] = useState([
        {title: '«الخارجية» تحتفل بـ اليوم الدولي للمرأة في العمل الديبلوماسي', time: 'ساعتين'},
        {title: "السفارة الفيليبينية ترحب برفع الكويت حظر التأشيرات للعمالة", time: '٣ ساعات'},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات'},
    ])
    const [importantNews, setImportantNews] = useState([
        {title: 'النفط يتراجع متأثراً بصعودالدولار وسط مخاوف «الفائدة المرتفعة» النفط يتراجع متأثراً بصعودالدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', img: new2},
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', img: new2},
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', img: new2},
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', img: new2},
    ])
    return <Row className="news mt-5 custom-container">
        <Col md={4}>
            <div>
                <div className="titles">
                    <p>آخر الأخبار</p>
                    <a href='#' className="view_all">مشاهده الكل</a>
                </div>
                <div className="newNews">
                    {newNews?.map((ne, index) => {
                        return <div key={index} className='new'>
                            <p className="title">{ne?.title}</p>
                            <p className="since">{ne?.time}</p>
                        </div>
                    })}
                </div>
            </div>
        </Col>
        <Col md={8} className="importants">
            <div style={{overflow: 'hidden'}}>
                <div className="titles">
                    <p>أهم الأخبار</p>
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
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    }}
                    className="mySwiper"
                >
                    {importantNews?.map((important,index)=>{
                    return <SwiperSlide key={index}>
                        <div style={{backgroundImage: `url(${important?.img})`}} className="important">
                            <div className="details">
                                <p className="since">منذ {important?.time}</p>
                                <p className="title">{important?.title}</p>
                            </div>
                        </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </Col>
    </Row>
}
export default News;