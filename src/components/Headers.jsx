import { FiMoreVertical , FiChevronLeft} from 'react-icons/fi';
import { RiWifiLine } from 'react-icons/ri';
import { BsBatteryFull } from 'react-icons/bs';
import { GiNetworkBars } from 'react-icons/gi';
import DropDown from './dropDwon';
import { useState } from 'react';

function Headers() {
  const [dropDownShow, setDropDownShow] = useState(false)

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
        <FiMoreVertical onClick={() => setDropDownShow(!dropDownShow)} color='#aeb8c4'  size={30}/>
      </div>
    {
      dropDownShow &&   <DropDown />
    }
    </div>
  )
}

export default Headers
