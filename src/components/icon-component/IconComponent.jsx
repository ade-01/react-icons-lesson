import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer, FaCoffee, FaApple } from "react-icons/fa";


const IconComponent = () => {
  return (
    <div className='container mt-5'>
        <h1 className='text-center'>React Icons With Bootstrap</h1>
        <div className='row justify-content-center mt-4'>
            <div className='col-4 text-center'>
                 <FaBeer size={50} className='text-primary' />
                <p>Enjoy A Beer</p>
            </div>
            <div className='col-4 text-center'>
                <FaCoffee size={50} className='text-warning'/>
                <p>Have A Coffee</p>
            </div>
            <div className='col-4 text-center'>
                <FaApple size={50} className='text-danger'/>
                <p>Eat An Apple</p>
            </div>
        </div>
    </div>
  )
}

export default IconComponent