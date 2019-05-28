import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getItemDetails } from '../actions/index'

import ListItem from './listItem'

class defaultPage extends Component {
	constructor(props) {
    super(props)

    this.goToItem = this.goToItem.bind(this)
  }

  captilizeString (string) {
  	return string.charAt(0).toUpperCase() + string.slice(1)
  }

	goToItem (e, id, index) {
		const { dispatch } = this.props

		const request = new Request(`https://api.thecatapi.com/v1/images/${id}`, {
      headers: new Headers({
        "x-api-key": "15bd9057-cbff-4df5-a01c-bc875c2e55a2"
      })
    })

    fetch(request)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
      	dispatch(getItemDetails(data))
      })

		this.props.history.push(`/item/${id}/${index}`)
	}

	render () {
		const { getUsers, getItems } = this.props
		return (
			<Fragment>
				<div className="row">
					<div className="col users">
						<div className="featured-users">
							<h2>Top 250 users</h2>
							<ul className="list-group">
								{getUsers && getUsers.length > 0 && getUsers.map((user, index) => {
									return (
										<li key={index} className="list-group-item">
											<img
												className="img-fluid"
												alt={user.name.first}
												src={`http://placehold.it/30&text=Item${user.name.first}”`} /> {this.captilizeString(user.name.first)}
										</li>
									)
								})}
							</ul>
						</div>
					</div>

					<div className="col-9 features-images">
						<div className="row">
							{getItems && getItems.length > 0 && getItems.map((item, index) => {
					      return (
					      	<ListItem
					      		key={item.id}
					      		index={index}
					      		id={item.id}
					      		imageSrc={item.url}
					      		imageTitle={`Image ${index}`}
					      		imageDescription={`This is the description for Image ${index}, it's a really cool image, bask in its gloriousness`}
					      		goToItem={this.goToItem} />
					      )
					    })}
				    </div>
			    </div>
		    </div>
	    </Fragment>
		)
	}
}

defaultPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { GetUsers, GetItems } = state.rootReducer
  return {
    getUsers: GetUsers,
    getItems: GetItems
  }
}

export default withRouter(connect(mapStateToProps)(defaultPage))