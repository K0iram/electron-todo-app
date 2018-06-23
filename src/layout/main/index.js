import React, { Component } from 'react'
import Navbar from '../../components/Navigation'
import './App.css'

class AppLayout extends Component {

    render() {
      return (
        <div className="App">
          <Navbar/>
          <div className="main-content">
            { this.props.children }
          </div>
        </div>
      )
    }
  }

export default AppLayout
