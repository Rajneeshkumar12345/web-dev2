import React, {useEffect, useState} from 'react'

export default function Ue2() {

    const[count, setCount] = useState(0)
    const[name, setName] = useState('Rajneesh')

    useEffect(() => {
      document.title = 'This is my Title ${count}'

    } , [])

  return (
    <div>
        <h1>This is a counter {count}</h1>
        <h1>{name}</h1>
        <button onClick={()=> setCount(count+1)}>+1</button>
        <button onClick={()=>setName('Rohit')}>Change Name</button>
    </div>
  )
}
