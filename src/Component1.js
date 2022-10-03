import React, { memo } from 'react'

const Component1 = ({getData}) => {
    console.log("component1")
  return (
    <div>
        Component1 =>
        <input type='text' onChange={(e)=>getData(e.target.value)} />
    </div>
  )
}

export default memo (Component1)