import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Routes from './routes'

import { getUsers, getItems } from './app/actions/index'

import 'bootstrap/dist/css/bootstrap.min.css'

import './style.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount () {
    const { dispatch } = this.props
    fetch("https://randomuser.me/api/?results=250")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        dispatch(getUsers(data.results))
      })

    const request = new Request("https://api.thecatapi.com/v1/images/search?limit=10&size=small", {
      headers: new Headers({
        "x-api-key": "15bd9057-cbff-4df5-a01c-bc875c2e55a2"
      })
    })

    fetch(request)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        dispatch(getItems(data))
      })
  }


  render () {
    return (
      <div className="container">
        <Routes />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default withRouter(connect()(App))
