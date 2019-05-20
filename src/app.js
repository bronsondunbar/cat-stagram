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
    // fetch("https://api.thecatapi.com/api/images/get?format=json&results_per_page=10&size=small&type=png")
    //   .then(function(response) {
    //     return response.json()
    //   })
    //   .then(function(data) {
    //     dispatch(getItems(data))
    //   })

    const request = new Request('https://api.thecatapi.com/v1/breeds?limit=250', {
      headers: new Headers({
        'x-api-key': '15bd9057-cbff-4df5-a01c-bc875c2e55a2'
      })
    })

    fetch(request)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
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
