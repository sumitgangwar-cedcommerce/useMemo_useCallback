import React, { memo } from 'react'

const Component3 = ({val}) => {
    console.log('component3')
  return (
    <div>Component3 = > {val}</div>
  )
}

export default memo(Component3)