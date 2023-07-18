

function CardFrame(props) {

    return (
      <center>
        <div className='card_frame_view'>
             {props.children}
      </div>
      </center>
    )
  }
  
  export default CardFrame
  