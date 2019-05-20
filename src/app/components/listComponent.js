import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class ListComponent extends Component {
	render () {
		const { getItems } = this.props
		return (
			<Fragment>
				{getItems && getItems.length > 0 && getItems.map((item, index) => {
		      return (
		        <div key={item.id} className="col">
		          <div className="card">
		            {/*<img src={item.url} className="card-img-top" alt={item.id} />*/}
		            <div className="card-body">
		              <h5 className="card-title">{item.id}</h5>
		              <Link to="/item" className="btn btn-primary">Go somewhere</Link>
		            </div>
		          </div>
		        </div>
		      )
		    })}
	    </Fragment>
		)
	}
}

ListComponent.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { GetItems } = state.rootReducer
  return {
    getItems: GetItems
  }
}

export default withRouter(connect(mapStateToProps)(ListComponent))