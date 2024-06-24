import { Modal } from "react-bootstrap"
import './style.css'

const Live = ({ modal, setModal }) => {
    return <Modal className="fade live-modal" show={modal} onHide={setModal}>
            <Modal.Body>
            <iframe 
                src="https://www.youtube.com/embed/I00i74HEzWU?autoplay=1&mute=0&controls=0&playsinline=1" 
                frameborder="0" 
                allow="autoplay; encrypted-media; accelerometer; clipboard-write" 
                allowfullscreen
                referrerpolicy="strict-origin-when-cross-origin"
                data-gtm-yt-inspected-4="true"
                ></iframe>
            </Modal.Body>
    </Modal>
}
export default Live