import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class ListItem extends Component {
	async componentDidMount () {
		const { match } = this.props
		console.log(match.params.id)
	}

	render () {
		const { match } = this.props
		return (
			<Fragment>
				<h1>{match.params.id}</h1>
	    </Fragment>
		)
	}
}

ListItem.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default withRouter(connect()(ListItem))