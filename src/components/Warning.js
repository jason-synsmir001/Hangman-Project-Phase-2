import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You Already Pressed That Letter!</p>
    </div>
  )
}

export default Notification