import { useState } from "react"


function Chips({data, item, setItem}) {


    return (
      <center>
        <div className='nonCardView flex_between_style'>
            {
               data?.map((title) => (
                    <div onClick={() => setItem(title)} className={`chip_item flex_style ${item == title ? 'chip_selected' : ''}`}>
                        <p className={`${item == title ? 'chip_text_selected' : 'chip_text_non_selected'}`}>{title}</p>
                    </div>
               ))
            }
      </div>
      </center>
    )
  }
  
  export default Chips
  