import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class ListItem extends Component {
	render () {
		const { getItems } = this.props
		return (
			<Fragment>
				<h1>Hello</h1>
	    </Fragment>
		)
	}
}

ListItem.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { GetItems } = state.rootReducer
  return {
    getItems: GetItems
  }
}

export default withRouter(connect(mapStateToProps)(ListItem))