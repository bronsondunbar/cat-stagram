import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getItemDetails } from '../actions/index'

import Loader from '../utils/loader'

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
				{(!getItem && getItem.length === 0) &&
					<Loader
						status={"Please wait..."} />
				}

				<div className="row details">
					<div className="col ">
						<img
							className="img-fluid"
							loading="lazy"
							alt={getItem.id}
							src={getItem.url} />
					</div>

					<div className="col">
		        <header>
						  <h2>Image {index} details</h2>
		        </header>
		        <p>This is the description for Image {index}, it's a really cool image, bask in its gloriousness</p>
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