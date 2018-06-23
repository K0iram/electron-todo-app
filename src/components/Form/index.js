import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'

import './style.css'

class ReminderForm extends Component {

  render() {
    return (
      <Paper className='root' elevation={4}>
        <div className="item-inputs">
          <TextField
            id="multiline-static"
            placeholder="Remember to..."
            multiline
            rowsMax="5"
            margin="normal"
            value={this.props.body}
            onChange={this.props.bodyChange}
          />
          <div className="add-btn">
            <Button
              variant="fab"
              color="primary"
              aria-label="add"
              className="button"
              onClick={this.props.addItem}
              disabled={this.props.disabled}
            >
              <AddIcon />
            </Button>
          </div>
        </div>
      </Paper>
    )
  }
}

export default ReminderForm