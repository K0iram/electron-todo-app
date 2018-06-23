import React, { Component } from 'react'
import moment from 'moment'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import ItemCard from './itemCard'

import './style.css'


class ItemContainer extends Component {
  state = {
    title: "",
    body: "",
    reminders: []
  }

  addItem = () => {
    let newElement =  {
      title: this.state.title,
      date: moment().format('LLLL'),
      body: this.state.body
    }
    this.setState(prevState => ({
      reminders: [...prevState.reminders, newElement],
      title: '',
      body: ''
    }))
  }

  removeItem(index) {
    this.setState({
      reminders: this.state.reminders.filter((_, i) => i !== index)
    });
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value})
  }

  onBodyChange = (e) => {
    this.setState({ body: e.target.value})
  }

  render() {
    return (
      <div>
        <div className="item-inputs">
          <Input
            value={this.state.title}
            placeholder="Title"
            className='input'
            onChange={this.onTitleChange}
          />
          <TextField
            id="multiline-static"
            placeholder="Remember to..."
            multiline
            rowsMax="5"
            value={this.state.body}
            onChange={this.onBodyChange}
            margin="normal"
          />
          <div className="add-btn">
            <Button
              variant="fab"
              disabled={this.state.title === "" ? true : false}
              color="primary"
              aria-label="add"
              className="button"
              onClick={this.addItem}
            >
              <AddIcon />
            </Button>
          </div>
        </div>

        <div className="item-container">
        {
          this.state.reminders.map((item, i) =>
            <ItemCard
              title={item.title}
              date={item.date}
              body={item.body}
              key={i}
              removeItem={() => this.removeItem(i)}
            />
          )
        }
        </div>
      </div>
    )
  }
}

export default ItemContainer