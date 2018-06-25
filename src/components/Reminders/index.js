import React, { Component } from 'react'
import moment from 'moment'

import ItemCard from './itemCard'
import ReminderForm from '../Form'

import './style.css'


class ItemContainer extends Component {
  state = {
    body: "",
    reminders: [],
    removed: [],
    duration: null
  }

  addItem = () => {
    let newElement =  {
      date: moment().format('LLLL'),
      body: this.state.body,
      duration: this.state.duration
    }
    this.setState(prevState => ({
      reminders: [...prevState.reminders, newElement],
      body: '',
      duration: null
    }))
  }

  undoQueue = (obj)  => {
    this.setState(prevState => ({
      removed: [...prevState.removed, obj]
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

  notify = (message, item, index) => {
    new Promise((resolve, reject) => {
      resolve(new Notification(message))
    })
    .then(() => {
      this.undoQueue(item)
      this.removeItem(index)
    })
  }

  onDurationChange = (e) => {
    this.setState({duration: e.target.value})
    console.log(`target: ${e.target.value}`, `state: ${this.state.duration}`)
  }

  render() {
    return (
      <div>
        <ReminderForm
          body={this.state.body}
          bodyChange={this.onBodyChange}
          addItem={this.addItem}
          disabled={this.state.body === ""}
          duration={this.state.duration}
          changer={this.onDurationChange}
        />
        <div className="item-container">
        {
          this.state.reminders.map((item, i) =>
            <ItemCard
              date={item.date}
              body={item.body}
              key={i}
              removeItem={() => this.undoQueue(item)}
              notify={() => this.notify(item.body, item, i)}
            />
          )
        }
        </div>

      </div>
    )
  }
}

export default ItemContainer