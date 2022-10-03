import React, { memo } from 'react'

const Component2 = ({val , getData}) => {
    console.log('component 2')
  return (
    <>
        <div>Value = {val}</div>
        Component2 => <input type='text' onChange={(e)=>getData(e.target.value)} />
    </>
  )
}

export default memo(Component2)