

function Chips({data}) {

    return (
      <center>
        <div className='nonCardView flex_between_style'>
            {
               data?.map((title) => (
                    <div className="chip_item flex_style">
                        <p className="chip_text">{title}</p>
                    </div>
               ))
            }
      </div>
      </center>
    )
  }
  
  export default Chips
  