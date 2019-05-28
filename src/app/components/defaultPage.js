import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getUsers, getItems, getItemDetails } from '../actions/index'

import Loader from '../utils/loader'

import ListItem from './listItem'

class defaultPage extends Component {
	constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }

    this.goToItem = this.goToItem.bind(this)
  }

  async componentDidMount () {
    const { dispatch } = this.props

    this.setState((state, props) => {
      return { isLoading: true }
    })

    await fetch("https://randomuser.me/api/?results=250")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        dispatch(getUsers(data.results))
      })

    const request = new Request("https://api.thecatapi.com/v1/images/search?limit=10&size=medium", {
      headers: new Headers({
        "x-api-key": "15bd9057-cbff-4df5-a01c-bc875c2e55a2"
      })
    })

    await fetch(request)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        dispatch(getItems(data))
      })

    this.setState((state, props) => {
      return { isLoading: false }
    })
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
		const { isLoading } = this.state

		return (
			<Fragment>
				{isLoading &&
          <Loader
            status={"Please wait..."} />
        }

				<div className="row">
					<div className="col users">
						<div className="featured-users">
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

					<div className="col-md-9 col-12 features-images">
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