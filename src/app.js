import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Routes from './routes'

import Header from './app/utils/header'

import 'bootstrap/dist/css/bootstrap.min.css'

import './app/assets/sass/style.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.goHome = this.goHome.bind(this)
  }

  goHome () {
    this.props.history.push("/")
  }

  render () {
    return (
      <Fragment>
        <Header
          goHome={this.goHome} />
        <div className="container">
          <Routes />
        </div>
      </Fragment>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default withRouter(connect()(App))
