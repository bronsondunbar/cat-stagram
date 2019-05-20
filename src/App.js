import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Routes from './routes'

import { getItems } from './app/actions/index'

import ListComponent from './app/components/listComponent'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      url: process.env.PUBLIC_URL
    }
  }

  async componentDidMount () {
    const { dispatch } = this.props
    fetch("https://api.thecatapi.com/api/images/get?format=json&results_per_page=10&size=small&type=png")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        dispatch(getItems(data))
      })
  }


  render () {
    const { getItems } = this.props
    return (
      <div className="container">
        <h1>Cat-stagram</h1>
        <h2>Insgram just for cats!</h2>

        <div className="row">
          <ListComponent
            listItems={getItems}
          />
        </div>
        <Routes />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { GetItems } = state.rootReducer
  return {
    getItems: GetItems
  }
}

export default withRouter(connect(mapStateToProps)(App))
