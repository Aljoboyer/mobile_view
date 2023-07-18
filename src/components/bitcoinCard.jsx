import CardFrame from './cardFrame';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';

function BitcoinCard({showButton,setShowButton}) {


  return (
    <CardFrame>
        <div className='flex_between_style'>
            <div className='flex_style'>
                <div className='bitcoin_card_icoin flex_style'>
                    <BsCurrencyBitcoin size={30} color='white'/>
                </div>
                <p className='bitcoin_title'>Bitcoin</p>
            </div>
            <p className='btc_text'>BTC</p>
        </div>
        <p className='bitcoin_amount'>3.529020BTC</p>
         <div className='flex_between_style'>
            <p className='bitcoin_price'>$ 19.153 USD</p>
            <div className='chip flex_style' >
                <p className=''>-2.32%</p>
            </div>
        </div>
        <div onClick={() => setShowButton(!showButton)} className='flex_style'>
            <FiChevronDown color='#aeb8c4' size={50}/>
        </div>
    </CardFrame>
  )
}

export default BitcoinCard
