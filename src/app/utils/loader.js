import React from 'react'

const Header = ({ status }) => {
  return (
    <div className="loader">
      <div className="spinner-border" style={{ width: "3rem", height: "3rem"}} role="status">
        <span className="sr-only">{status}</span>
      </div>
    </div>
  )
}

export default Header