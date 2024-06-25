import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import './style.css'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import new1 from '../../../assets/employees.jpeg'
import new2 from '../../../assets/employees1.jpeg'
import 'swiper/css/navigation';
const SelectedNews = () => {
    const [mainNew, setMainNew] = useState({
        title: '«الخارجية» تحتفل بـ اليوم الدولي للمرأة في العمل الديبلوماسي', 
        time: 'ساعتين',
        type: 'العالميه',
        img: new1
    })
    const [selectNews, setSelectNews] = useState([
        {title: '«الخارجية» تحتفل بـ اليوم الدولي للمرأة في العمل الديبلوماسي', time: 'ساعتين',type: 'العالميه',img: new2},
        {title: "السفارة الفيليبينية ترحب برفع الكويت حظر التأشيرات للعمالة", time: '٣ ساعات',type: 'العالميه',img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات',type: 'العالميه',img: new2},
    ])
    const [mostReading, setMostReading] = useState([
        {title: 'النفط يتراجع متأثراً بصعودالدولار وسط مخاوف «الفائدة المرتفعة» النفط يتراجع متأثراً بصعودالدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', type: 'العالميه', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', type: 'العالميه', img: new2},
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', type: 'العالميه', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', type: 'العالميه', img: new2},
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين', type: 'العالميه', img: new1},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات', type: 'العالميه', img: new2},
    ])
    return <div className="selectedNews custom-container">
                <div className="titles">
                    <p className="main-title">أخبار مختارة</p>
                    <p className="sub-title">حسب الفئه</p>
                </div>
        <Row >
            <Col md={6}>
                <div className="mainNew h-100">
                    <div className='desc'>
                        <p className="type">{mainNew?.type}</p>
                        <p className="since">{mainNew?.time}</p>
                        <p className="title">{mainNew?.title}</p>
                    </div>
                    <img src={mainNew?.img} className="w-100 h-100" alt='new' />
                </div>
            </Col>
            <Col md={3}>
                <div className="subMain h-100">
                    {selectNews?.map((ne, index) => {
                        return <div key={index} className="subMain-div">
                        <div className="details">
                            <p className="type">{ne?.type}</p>
                            <p className="since">منذ {ne?.time}</p>
                            <p className="title">{ne?.title}</p>
                        </div>
                        <img src={ne?.img} className="w-100" alt='new' />
                    </div>
                    })}
                </div>
            </Col>
            <Col md={3}>
                {mostReading?.map((read, index) =>{
                    return <Row key={index} className="mostReading">
                    <Col md={8}>
                        <h6>{read?.type}</h6>
                        <p className="title">{read?.title}</p>
                    </Col>
                    <Col md={4}>
                        <img src={read?.img} alt='new' className="w-100 h-100" />
                    </Col>
                </Row>
                })}
            </Col>
        </Row>
    </div>
}
export default SelectedNews ;