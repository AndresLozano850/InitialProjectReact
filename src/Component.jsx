import React,{ useState } from 'react'

export default function Component() {
    const [text,setText]= useState();
    const [update,setUpdate]= useState();

    const textOnchange = (event) => {
        setText(event.target.value); // Cuando Onchange Cambie se llama Set
    }
    const buttonOnclick = () => {
        setUpdate(text); // Cuando Onchange Cambie se llama Set
    }

  return (
    <div>
        <input type="text" value={text} onChange={textOnchange}/>
        <button onClick={buttonOnclick}>Actualzizar</button>
        <p>Texto input: {text}</p>
        <p>Texto Actualizado {update} </p>
       <input type="text" />
    </div>
  )
}
