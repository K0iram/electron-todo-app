import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


import './style.css'


class HelloWorld extends Component {

  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}

export default HelloWorld