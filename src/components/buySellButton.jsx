import { FaDollarSign } from 'react-icons/fa';

function BuySellButton({data}) {


  return (
    <center>
      <div className='nonCardView flex_between_style'>
        {
        data?.map((title) => (
                <div className="buySellButton_card">
                    <div className={`flex_style buySellIcon ${title == 'Buy' ? 'blueBg' : 'pinkBg'}`}>
                        <FaDollarSign size={40} color="white"/>
                    </div>
                    <p className="optionText">{`${title} BTC`}</p>
                </div>
        ))
        }
    </div>
    </center>
  )
}

export default BuySellButton
