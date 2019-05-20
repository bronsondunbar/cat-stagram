import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getItem } from '../actions/index'

class ListItem extends Component {
	async componentDidMount () {
		const { match, dispatch } = this.props

		const request = new Request(`https://api.thecatapi.com/v1/images/${match.params.id}`, {
      headers: new Headers({
        "x-api-key": "15bd9057-cbff-4df5-a01c-bc875c2e55a2"
      })
    })

    fetch(request)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
      	dispatch(getItem(data))
      })
	}

	render () {
		const { match, getItem } = this.props
		let index = match.params.index

		return (
			<Fragment>
				<img src={getItem.url} />
				<h1>Image {index}</h1>
				<p>This is the description for Image {index}, it's a really cool image, bask in its gloriousness</p>
	    </Fragment>
		)
	}
}

ListItem.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { GetItem } = state.rootReducer
  return {
    getItem: GetItem
  }
}

export default withRouter(connect(mapStateToProps)(ListItem))