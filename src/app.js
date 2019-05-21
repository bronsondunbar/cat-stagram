import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Routes from './routes'

import Loader from './app/utils/loader'
import Header from './app/utils/header'

import { getUsers, getItems } from './app/actions/index'

import 'bootstrap/dist/css/bootstrap.min.css'

import './app/assets/sass/style.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }

    this.goHome = this.goHome.bind(this)
  }

  async componentDidMount () {
    const { dispatch } = this.props

    this.setState((state, props) => {
      return { isLoading: true }
    })

    await fetch("https://randomuser.me/api/?results=250")
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

    await fetch(request)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        dispatch(getItems(data))
      })

    this.setState((state, props) => {
      return { isLoading: false }
    })
  }

  goHome () {
    this.props.history.push("/")
  }

  render () {
    const { isLoading } = this.state
    return (
      <div className="container">
        {isLoading &&
          <Loader
            status={"Please wait..."} />
        }
        <Header
          goHome={this.goHome} />
        <Routes />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default withRouter(connect()(App))
