import React from 'react'

const FunErrorBoundary = ({error, resetErrorBoundary}) => {
  return (
    <div>
    <h2>{error.message}</h2>
    {/* <button onClick={resetErrorBoundary}>Reset</button> */}
  </div>
  )
}

export default FunErrorBoundary