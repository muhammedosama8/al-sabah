import { useState } from 'react';
import Live from './LiveModal';
import './style.css'

function Header() {
  const [modal, setModal] = useState(false)
  // const bannerService = new BannerService()

  // useEffect(()=>{
  //   bannerService?.getList().then(res=>{
  //     if(res?.status === 200){
  //       setData(res?.data?.data)
  //     }
  //   })
  // },[])

  return (
    <div class="header">
      <iframe 
        src="https://www.youtube.com/embed/I00i74HEzWU?autoplay=1&mute=1&controls=0&playsinline=1" 
        frameborder="0" 
        allow="autoplay; encrypted-media; accelerometer; clipboard-write" 
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
        data-gtm-yt-inspected-4="true"
        ></iframe>
        <button className='live' onClick={()=> setModal(true)}>
          مباشر
          <i class="bi bi-arrows-angle-expand"></i>
        </button>

        {modal && <Live modal={modal} setModal={()=> setModal(false)} />}
    </div>
  );
}

export default Header;