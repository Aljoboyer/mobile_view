import { FiMoreVertical , FiChevronLeft} from 'react-icons/fi';
import { RiWifiLine } from 'react-icons/ri';
import { BsBatteryFull } from 'react-icons/bs';
import { GiNetworkBars } from 'react-icons/gi';

function Headers() {


  return (
    <div className='headers'>
      <div className='headers_statusbar flex_between_style'>
        <p className='header_status_text'>9:45</p>
        <div className='empty_div flex_style'>
            <div className='speaker'></div>
            <div className='camera'></div>
        </div>
        <div>
        <GiNetworkBars className='icons' color='black'  size={15}/>
          <RiWifiLine  className='icons' color='black' size={15} />
          <BsBatteryFull  className='icons' color='black'  size={15}/>
        </div>
      </div>
      <div className='header_main_div flex_between_style'>
        <FiChevronLeft color='#aeb8c4' size={30} />
        <p className='headers_title'>Bitcoin Wallet</p>
        <FiMoreVertical color='#aeb8c4'  size={30}/>
      </div>
    </div>
  )
}

export default Headers
