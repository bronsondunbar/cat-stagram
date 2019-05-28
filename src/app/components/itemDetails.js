import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getItemDetails } from '../actions/index'

import ImageLoader from './imageLoader'

class ItemDetails extends Component {
	componentWillUnmount () {
		const { dispatch } = this.props
		dispatch(getItemDetails())
	}

	render () {
		const { match, getItem } = this.props
		let index = match.params.index

		return (
			<Fragment>
				<div className="row featured-image-details">
					<div className="col-md-6 col-sm-12">
						<ImageLoader
							imageSrc={getItem.url}
							imageTitle={getItem.id} />
					</div>

					<div className="col-md-6 col-sm-12">
		        <header>
						  <h2>Image {index} details</h2>
		        </header>
		        <p>This is the description for Image {index}, it's a really cool image, bask in its gloriousness</p>
		        <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.history.push("/")}>
              Back
            </button>
		      </div>
        </div>
	    </Fragment>
		)
	}
}

ItemDetails.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { GetItemDetails } = state.rootReducer
  return {
    getItem: GetItemDetails
  }
}

export default withRouter(connect(mapStateToProps)(ItemDetails))