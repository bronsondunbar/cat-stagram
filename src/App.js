import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Routes from './routes'

import { getItems } from './app/actions/index'

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
    return (
      <Routes />
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default withRouter(connect()(App))
