import React from 'react'

import catStagramSvg from '../assets/svg/cat-stagram.svg'

const Header = ({ goHome }) => {
  return (
    <header>
      <img
        className="img-fluid"
      	src={catStagramSvg}
        alt={"Cat-Stagram"}
      	onClick={(e) => goHome()} />
      <h1>Cat-Stagram</h1>
      <h2>For the love of cats!</h2>
    </header>
  )
}

export default Header