import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {

    const [contador, setContador]=useState(1)
    const stock=10
    const incrementar = ()=>{
        if(contador<stock){
            setContador(contador +1)
        }
    }

    const decrementar = ()=>{
        if(contador>1){
            setContador(contador -1)
        }
    }

    function onAdd(){
        console.log(`Se a agregado ${contador} items al carrito`);
    }
    return (
        <>
            <div className='contador'>
                <button className='menos' onClick={decrementar}>-</button>
                <strong className='cuenta'>{contador}</strong>
                <button className='mas' onClick={incrementar}>+</button>
            </div>
            <button className="agregar" onClick={onAdd}>AGREGAR AL CARRITO</button>
        </>
    )
}

export default ItemCount