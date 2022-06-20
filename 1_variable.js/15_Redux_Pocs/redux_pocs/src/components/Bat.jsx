import React, {useState} from 'react'

export default function Bat() {
    const [bat, setBat] = useState(10);
    const [tosell, setTochangeBat] = useState("")
    const sellBat = () => {
        setBat(bat - tosell);
        setTochangeBat("")
    }
    const buyBat = () =>{
        setBat(bat + tosell);
            setTochangeBat("")
    }
  return (
    <div>
        <h1>Bat</h1>
        <h2>No of Bat:{bat}</h2>
        <input type="text" value={tosell} onChange={(e) => {
            let value = e.target.value;
            setTochangeBat(value);
        }} />
        <button onClick={sellBat}>Sell</button>
        <button onClick={buyBat}>Buy</button>
    </div>
  )
}
