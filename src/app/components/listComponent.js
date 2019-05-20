import React, { Fragment } from 'react'

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
	              <a href="#" className="btn btn-primary">Go somewhere</a>
	            </div>
	          </div>
	        </div>
	      )
	    })}
    </Fragment>
	)
}

export default ListComponent