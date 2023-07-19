import { CgEditFlipH } from 'react-icons/cg';
import { LiaBoxSolid } from 'react-icons/lia';
import { FiShare } from 'react-icons/fi';
import { MdRemoveCircleOutline } from 'react-icons/md';


function DropDown() {
    const dropDownData = [
        {
            icon: <CgEditFlipH size={18} />,
            name: 'Edit'
        },
        {
            icon: <LiaBoxSolid size={18} />,
            name: 'Courier Info'
        },
        {
            icon: <FiShare size={18} />,
            name: 'Share'
        },
        {
            icon: <MdRemoveCircleOutline color='red' size={18} />,
            name: 'Remove'
        }
    ]
  return (
    <div className="dropDown_view">
        {
            dropDownData?.map((item) => (
                <div className='dropDown_item flex_between_style'>
                    <p className={`drop_down ${item?.name == 'Remove' ? 'drop_text_red' : ''}`}>{item?.name}</p>
                    {item?.icon}
                </div>
            ))
        }
    </div>
  )
}

export default DropDown