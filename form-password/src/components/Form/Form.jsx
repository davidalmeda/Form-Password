import { useState } from 'react'
import './index.css'
import Confirm from '../Confirm/Confirm'

function Form() {
  const [password, setPassword] = useState({
    value: "",
    level: 0,
  })
  const[showConfirm, setShowConfirm] = useState(false)
  const umbral = 8
  function handleOnChangePassword(event) {
    const val = event.target.value
    let puntos = 0
    console.log(puntos)
    if(val.length > 6){
        console.log("HOLA")
        puntos = puntos +1
        if(val.length > 8){
            puntos = puntos +1
            if(val.length > 12){
                puntos = puntos +1
            }
        }
    }
    if(val.replace(/[^0-9]/g,"").length > 0) {
        puntos = puntos + 1
    }
    if(val.replace(/[^a-z]/g,"").length > 0) {
        puntos = puntos + 1
        if(val.replace(/[^A-Z]/g,"").length > 0) {
            console.log("mayus")
            puntos = puntos + 2
        }
    }
    if(val.replace(/[@#$%_^&+=!]/g,"").length > 0) {
        console.log("especial")
        puntos = puntos + 1
    }
    if(puntos==9){
        puntos = puntos + 1
    }
    console.log(puntos)
    setPassword({
        password: val,
        level:puntos
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    if(password.level < umbral) {
        setShowConfirm(true)
    }
  }
  const {passwordVal, level} = password
  return (
    <form className='form' onSubmit={(event) => handleSubmit(event)}>      
      <label className='label'>
        Contraseña
        <input type="password" required name="contraseña"  value={passwordVal} onChange={handleOnChangePassword} title="Debe contener al menos 5 letras, un número y un caracter especial"/>
      </label>

      <input type="submit" value="Enviar" className='send'/>
    <Confirm isShown={showConfirm}/>
    </form>
  )
}

export default Form