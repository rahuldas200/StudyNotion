import React from 'react'
import IconBtn from './IconBtn'

const ConfarmationMadal = ({modalData}) => {
  return (
    <div className='text-white'>
      <div>
        <p className='text-white'>
            {modalData.text1}
        </p>
        <p>
            {modalData.text2}
        </p>

        <div>
            <IconBtn
                onClick={modalData?.btnHandler}
                text={modalData?.btn1Text}
            />
            <button onClick={modalData?.btn2Handler}>
                {module?.btn2Text}
            </button>
        </div>

      </div>
    </div>
  )
}

export default ConfarmationMadal
