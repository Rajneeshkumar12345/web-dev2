import React from 'react'
import ChildB from './ChildB'

export default function ChildA({firstName, lastName}) {
  return (
    <div>
        <h1>This is a ChildA and its children of B</h1>
        <ChildB fName={firstName} lName={lastName}/>
    </div>
  )
}
