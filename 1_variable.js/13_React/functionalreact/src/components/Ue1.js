import React,{   useEffect,useState} from 'react'

export default function Ue1() {
    const[count, setCount] = useState(0)

    useEffect(() => {
      document.title = 'This is my Title ${count}'
    
  
    })
    
  return (
    <div>
        <h1>This is a counter {count}</h1>
        <button onClick={()=> setCount(count+1)}>+1</button>
    </div>
  )
}
