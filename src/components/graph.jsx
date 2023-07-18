import { LineChart, Line } from 'recharts';
import CardFrame from './cardFrame';
const data = [{name: 'Page A', uv: 100, pv: 1400, amt: 1400},{name: 'Page B', uv: 250, pv: 1500, amt: 1500},{name: 'Page C', uv: 300, pv: 1600, amt: 1600}];
import { RxDotFilled} from 'react-icons/rx';

function Graph() {


  return (
    <CardFrame>
      <div className='flex_between_style'>
          <div className='graph_icon_div'>
              <RxDotFilled color='#fd4a8d' />
              <p className='graph_text'>Lower: $4.895</p>
          </div>
          <div className='graph_icon_div'>
              <RxDotFilled color='#1ec070' />
              <p className='graph_text'>Higher: $6.895</p>
          </div>
      </div>
        <LineChart width={300} height={200} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
    </CardFrame>

  )
}

export default Graph
