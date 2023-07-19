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

  return (
    <div className="main_view flex_style">
        <Frame>
            <Headers/>
            <BitcoinCard showButton={showButton} setShowButton={setShowButton} />
            {
                showButton && <BuySellButton data={['Buy', 'Sell']} />
            }
            <Chips data={['Day', 'Week', 'Month', 'Year']}  item={item} setItem={setItem}/>
            <Graph  />
            <BuySellButton data={['Buy', 'Sell']} />
            <BottomTabs/>
        </Frame>
    </div>
  )
}

export default Home
