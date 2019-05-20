import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

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
				<h1>Cat-stagram</h1>
				<div className="row">
					<div className="col">
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
						<div className="row wall">
							{getItems && getItems.length > 0 && getItems.map((item, index) => {
					      return (
					        <div key={item.id} className="col-4">
					          <div className="card">
					          	<div
					          		className="card-img-top"
					          		style={{backgroundImage: `url(${item.url})`}} />
					            <div className="card-body">
					              <h5 className="card-title">Image {index}</h5>
					              <p>This is the description for Image {index}, it's a really cool image, bask in its gloriousness</p>
					              <button
					              	type="button"
					              	className="btn btn-primary"
					              	onClick={(e) => this.goToItem(e, item.id, index)}>
					              	Find out more
					              </button>
					            </div>
					          </div>
					        </div>
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