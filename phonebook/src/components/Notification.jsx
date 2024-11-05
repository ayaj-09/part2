import React from 'react'

const Notification = ({message}) => {
    if(message===null){
        return null
    }
  return (
    <div className={`message ${message.includes('deleted')?'error':''}`}>
      {message}
    </div>
  )
}

export default Notification
