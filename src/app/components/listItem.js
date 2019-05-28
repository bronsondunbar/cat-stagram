import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

import ImageLoader from './imageLoader'

import defaultSvg from '../assets/svg/default.svg'

class ListItem extends Component {
	render () {
		const { id, index, imageSrc, imageTitle, imageDescription, goToItem } = this.props

		return (
			<div className="col-md-4 col-12">
        <div className="card">
          <div
            className="card-img-top">
            <ImageLoader
              imageSrc={imageSrc}
              imageTitle={imageTitle} />
          </div>

          <div className="card-body">
            <h3 className="card-title">{imageTitle}</h3>
            <p>{imageDescription}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => goToItem(e, id, index)}>
              Find out more
            </button>
          </div>
        </div>
      </div>
		)
	}
}

ListItem.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default withRouter(connect()(ListItem))