import { useState } from 'react'
import Headers from './components/Headers'
import BitcoinCard from './components/bitcoinCard'
import BottomTabs from './components/bottomTab'
import BuySellButton from './components/buySellButton'
import Chips from './components/chips'
import Frame from './components/frame'
import Graph from './components/graph'

import './index.css'

function App() {
const [showButton, setShowButton] = useState(false)

  return (
    <div className='flex_style'>
        <div className="main_view flex_style">
        <Frame>
            <Headers/>
            <BitcoinCard showButton={showButton} setShowButton={setShowButton} />
            {
              showButton && <BuySellButton data={['Buy', 'Sell']} />
            }
            <Chips data={['Day', 'Week', 'Month', 'Year']} />
            <Graph/>
            <BuySellButton data={['Buy', 'Sell']} />
            <BottomTabs/>
          </Frame>
        </div>
    </div>
  )
}

export default App
