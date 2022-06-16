import React from 'react'


function Square({value, handleUpdate}) {
  return (
    <button className='square' onClick={() => handleUpdate()}>{value}</button>
  )
}

export default Square