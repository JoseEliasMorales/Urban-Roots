import './CheckBox.css'
import Swal from 'sweetalert2'
import { useState } from 'react'

const CheckBox = (prop) => {
    
    const [check, setChecked]=useState(true)
    
    const handleChange = (event)=>{
        if(event.target.checked){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            })

            Toast.fire({
                icon: 'success',
                title: 'Agregado al carrito'
            })
        }else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            })

            Toast.fire({
                icon: 'error',
                title: 'Quitado del carrito'
            })
        }
        setChecked(checked=>!checked)
    }


    return (
        <>
            <label class="container">
                <input id='checkBox' value={check} onChange={handleChange} type="checkbox"/>
                <div class="checkmark"></div>
            </label>
        </>
    )
}

export default CheckBox