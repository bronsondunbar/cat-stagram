import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class App extends Component {

  async componentDidMount () {
    fetch("https://api.thecatapi.com/api/images/get?format=json&results_per_page=10&size=small&type=png")
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
      })
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { UserProjects } = state.rootReducer
  return {
    userProjects: UserProjects
  }
}

export default withRouter(connect(mapStateToProps)(App))
