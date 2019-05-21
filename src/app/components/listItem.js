import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class ListItem extends Component {
	render () {
		const { id, index, image, title, description, goToItem } = this.props

		return (
			<div className="col-4">
        <div className="card">
          <div
            className="card-img-top"
            style={{backgroundImage: `url(${image})`}} />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
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