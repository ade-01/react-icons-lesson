import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const IconLabels = ({Icon,label,color}) => {
  return (
    <div className='col-4 text-center'>
        <Icon size={50} className={`text-${color}`}/>
        <p>{label}</p>
    </div>
  )
}

export default IconLabels