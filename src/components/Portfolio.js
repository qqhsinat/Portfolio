import React from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'

export default function Portfolio(){
    return(
        <div className='centered'>
        <div className="centered-container">
        <h1 className="tothe">To the</h1>
        <Link className='redirect' to='/'>portfolio</Link>
        </div>
        </div>
    )
}