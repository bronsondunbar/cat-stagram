import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import ListItem from './listItem'

class defaultPage extends Component {
	constructor(props) {
    super(props)

    this.goToItem = this.goToItem.bind(this)
  }

	goToItem (e, id, index) {
		console.log(id)
		console.log(index)
		this.props.history.push(`/item/${id}/${index}`)
	}

	render () {
		const { getUsers, getItems } = this.props
		return (
			<Fragment>
				<header>
					<h1>Cat-stagram</h1>
				</header>

				<div className="row">
					<div className="col top-users">
						<h2>Our top users</h2>
						<ul className="list-group">
							{getUsers && getUsers.length > 0 && getUsers.map((user, index) => {
								return (
									<li key={index} className="list-group-item">
										{user.name.first}
										{/*<img src={`http://placehold.it/2048&text=Item${index}”`} className="img-fluid" />
										<p>Item {index}</p>
										<p>This is the description for Item {index}</p>*/}
									</li>
								)
							})}
						</ul>
					</div>

					<div className="col-9">
						<h2>Wall of fame</h2>
						<div className="row feature">
							{getItems && getItems.length > 0 && getItems.map((item, index) => {
					      return (
					      	<ListItem
					      		index={index}
					      		id={item.id}
					      		image={item.url}
					      		title={`Image ${index}`}
					      		description={`This is the description for Image ${index}, it's a really cool image, bask in its gloriousness`}
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