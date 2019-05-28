import React from 'react'
import classNames from 'classnames'

const Header = ({ status, isContent }) => {
	const loaderClass = classNames("loader", {
		"content": isContent
	})

  return (
    <div className={loaderClass}>
      <div className="spinner-border" style={{ width: "3rem", height: "3rem"}} role="status">
        <span className="sr-only">{status}</span>
      </div>
    </div>
  )
}

export default Header