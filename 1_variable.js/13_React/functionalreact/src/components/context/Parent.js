import React, {useState} from 'react'
import ChildA from './ChildA'


export default function Parent() {
    const[firstName, lastFirstName]   = useState('Adam')
    const[lastName, setLastName] = useState('Smith')

  return (
    <div>
        <ChildA firstName={firstName} lastName={lastName}/>
    </div>
  )
}
