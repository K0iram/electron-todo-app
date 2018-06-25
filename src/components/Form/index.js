import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'


import './style.css'

class ReminderForm extends Component {

  timeValues = [
    {
      label: "1 Minute",
      duration: '60'
    },
    {
      label: "5 Minute",
      duration: '300'
    },
    {
      label: "15 Minute",
      duration: '900'
    },
    {
      label: "30 Minute",
      duration: '1800'
    },
    {
      label: "1 Hour",
      duration: '3600'
    },
  ]

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
          <div className="lower-container">
            <div className="durations">
              <strong><p>Remind me in: </p></strong>
              <FormGroup row>
              {
                this.timeValues.map((time, i) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={time.duration}
                          onChange={this.props.changer}
                          checked={this.props.duration === this.props.value}
                        />
                      }
                      label={time.label}
                      key={i}
                    />
                  )
                )
              }
              </FormGroup>
            </div>
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
        </div>
      </Paper>
    )
  }
}

export default ReminderForm