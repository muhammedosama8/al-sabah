import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const News = () => {
    const [newNews, setNewNews] = useState([
        {title: '«الخارجية» تحتفل بـ اليوم الدولي للمرأة في العمل الديبلوماسي', time: 'ساعتين'},
        {title: "السفارة الفيليبينية ترحب برفع الكويت حظر التأشيرات للعمالة", time: '٣ ساعات'},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات'},
    ])
    const [importantNews, setImportantNews] = useState([
        {title: 'النفط يتراجع متأثراً بصعود الدولار وسط مخاوف «الفائدة المرتفعة»', time: 'ساعتين'},
        {title: "صرف المكافأة التشجيعية لعمال «النفط»... غداً", time: '٣ ساعات'},
    ])
    return <Row className="mt-3">
        <Col md={4}>
            <div>
                <p>آخر الأخبار</p>
                <a href='#' >مشاهده الكل</a>
            </div>
            <div></div>
        </Col>
        <Col md={8}></Col>
    </Row>
}
export default News;