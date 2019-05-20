import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class defaultPage extends Component {
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
					              <Link to={`/item/${item.id}`} className="btn btn-primary">Find out more</Link>
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