import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer, FaCoffee, FaApple } from "react-icons/fa";
import IconLabels from '../icon-labels/IconLabels';


const IconComponent = () => {
  return (
    <div className='container mt-5'>
        <h1 className='text-center'>React Icons With Bootstrap</h1>
        <div className='row justify-content-center mt-4'>
                <IconLabels Icon={FaBeer} label='Enjoy A Beer' color='primary'/>
                <IconLabels Icon={FaCoffee} label='Have A Coffee' color='warning'/>
                <IconLabels Icon={FaApple} label='Eat An Apple' color='danger'/>
        </div>
    </div>
  )
}

export default IconComponent