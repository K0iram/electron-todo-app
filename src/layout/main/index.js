import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../../components/Navigation'
import 'typeface-roboto'
import './App.css'

class AppLayout extends Component {

    render() {
      return (
        <div className="App">
          <CssBaseline/>
          <Navbar/>
          <div className="main-content">
            { this.props.children }
          </div>
        </div>
      )
    }
  }

export default AppLayout
