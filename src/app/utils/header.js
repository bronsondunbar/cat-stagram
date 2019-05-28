import React from 'react'

import catStagramLgSvg from '../assets/svg/cat.stagram.lg.svg'
import catStagramSmSvg from '../assets/svg/cat.stagram.sm.svg'

const Header = ({ goHome }) => {
  return (
    <header>
      <img
        className="img-fluid d-none d-sm-block"
      	src={catStagramLgSvg}
        alt={"Cat-Stagram"}
      	onClick={(e) => goHome()} />
      <img
        className="img-fluid d-block d-sm-none"
        src={catStagramSmSvg}
        alt={"Cat-Stagram"}
        onClick={(e) => goHome()} />
      <h2>For the love of cats!</h2>
    </header>
  )
}

export default Header