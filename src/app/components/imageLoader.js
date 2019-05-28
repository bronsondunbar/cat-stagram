import React, { Component, Fragment } from 'react'
import classNames from 'classnames'

import Loader from '../utils/loader'

export default class imageLoader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageLoaded: false
    }
  }

	render () {
		const { imageSrc, imageTitle } = this.props
    const { imageLoaded } = this.state

    const imageFadeInClass = classNames({
      "fadeIn": imageLoaded === true
    })

		return (
      <Fragment>
        {!imageLoaded &&
          <Loader
            status={"Please wait..."}
            isContent={true} />
        }

        <img
          className={imageFadeInClass}
          alt={imageTitle}
          src={imageSrc}
          onLoad={() => this.setState({ imageLoaded: true })} />
      </Fragment>
		)
	}
}