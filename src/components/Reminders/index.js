import React, { Component } from 'react'
import moment from 'moment'

import ItemCard from './itemCard'
import ReminderForm from '../Form'

import './style.css'


class ItemContainer extends Component {
  state = {
    body: "",
    reminders: []
  }

  addItem = () => {
    let newElement =  {
      date: moment().format('LLLL'),
      body: this.state.body
    }
    this.setState(prevState => ({
      reminders: [...prevState.reminders, newElement],
      body: ''
    }))
  }

  removeItem(index) {
    this.setState({
      reminders: this.state.reminders.filter((_, i) => i !== index)
    })
  }

  onBodyChange = (e) => {
    this.setState({ body: e.target.value})
  }

  render() {
    return (
      <div>
        <ReminderForm
          body={this.state.body}
          bodyChange={this.onBodyChange}
          addItem={this.addItem}
          disabled={this.state.body === "" ? true : false}
        />
        <div className="item-container">
        {
          this.state.reminders.map((item, i) =>
            <ItemCard
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