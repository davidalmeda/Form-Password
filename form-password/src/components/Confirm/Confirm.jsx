import { useState } from 'react'
import './index.css'
import Button from '../Button/Button'

function Confirm({ isShown }) {
  if(!isShown) return null
  return (
    <div className='loader'>
        <p>Su contraseña es débil</p>
        <Button className="button" text = "Confirmar constraseña debil"/> 
    </div>
  )
}

export default Confirm