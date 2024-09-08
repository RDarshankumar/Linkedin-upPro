import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-full bg-teal-50'>
      <span className='w-16 h-16 border-4 border-t-4 border-teal-100 rounded-full border-t-teal-500 animate-spin'></span>
    </div>
  )
}

export default Loading
