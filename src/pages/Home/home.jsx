import { useState } from 'react'
import Frame from '../../components/frame'
import Headers from '../../components/Headers'
import BitcoinCard from '../../components/bitcoinCard'
import BuySellButton from '../../components/buySellButton'
import Chips from '../../components/chips'
import Graph from '../../components/graph'
import BottomTabs from '../../components/bottomTab'


function Home() {
const [showButton, setShowButton] = useState(false)
const [item, setItem] = useState('')
const [low, setLow] = useState()
const [high, setHigh] = useState()

const chipHandler = (item) => {
  setItem(item)
  if(item == 'Day'){
    setHigh((6.895 + 1.02).toFixed(3))
    setLow((4.895 - 1.02).toFixed(3))
  }
  else if (item == 'Week'){
    setHigh((6.895 + 2.02).toFixed(3))
    setLow((4.895 - 1.50).toFixed(3))
  }
  else if (item == 'Month'){
    setHigh((6.895 + 2.50).toFixed(3))
    setLow((4.895 - 2.02).toFixed(3))
  }
  else if (item == 'Year'){
    setHigh((6.895 + 3.02).toFixed(3))
    setLow((4.895 - 3.02).toFixed(3))
  }
}
  return (
    <div className="main_view flex_style">
        <Frame>
            <Headers/>
            <BitcoinCard showButton={showButton} setShowButton={setShowButton} />
            {
                showButton && <BuySellButton data={['Buy', 'Sell']} />
            }
            <Chips data={['Day', 'Week', 'Month', 'Year']}  item={item} chipHandler={chipHandler}/>
            <Graph low={low} high={high} />
            <BuySellButton data={['Buy', 'Sell']} />
            <BottomTabs/>
        </Frame>
    </div>
  )
}

export default Home
