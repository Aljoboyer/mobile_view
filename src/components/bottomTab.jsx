import {  IoIosNotifications} from 'react-icons/io';
import { RiSettings5Fill } from 'react-icons/ri';
import { BiSolidCompass , BiSolidWallet} from 'react-icons/bi';


function BottomTabs() {


  return (
    <div className='bottomTab  '>
       <div className='flex_between_style'>
       <BiSolidWallet size={30} />
        <BiSolidCompass color='#aeb8c4'   size={30} />
        <IoIosNotifications color='#aeb8c4'  size={30} />
        <RiSettings5Fill color='#aeb8c4'  size={30} />
       </div>
       <center><div className='emptyDiv'>

      </div></center>
    </div>
  )
}

export default BottomTabs
