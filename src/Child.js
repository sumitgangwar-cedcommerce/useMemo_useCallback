import React, { memo, useEffect } from 'react'

const Child = ({item ,fun}) => {
    useEffect(() => {
        // console.log('Child render')
      })
  return (
    <div>Child
        <button onClick={fun}>Child btn</button>
    </div>
  )
}

export default memo(Child)