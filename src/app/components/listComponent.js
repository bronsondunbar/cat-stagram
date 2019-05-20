import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ListComponent = ({ listItems }) => {
	return (
		<Fragment>
			{listItems && listItems.length > 0 && listItems.map((item, index) => {
	      return (
	        <div className="col">
	          <div className="card">
	            <img src={item.url} className="card-img-top" alt={item.id} />
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

export default ListComponent