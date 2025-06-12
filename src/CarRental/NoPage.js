import React from 'react'
import errorMsg from "./assets/image_processing20210907-29381-lsg0l0.gif";

const NoPage = () => {
    return (
        <div className=' container p-5 text-center'>
            <img src={errorMsg} className='w-50' alt='' />
        </div>
    )
}

export default NoPage