import React from 'react'
import ChildC from './ChildC'

export default function ChildB({fName, lName}) {
  return (
    <div>
        <h1>This is ChildB and its children C</h1>
        <ChildC fName={fName} lName={lName}/>
    </div>
  )
}
