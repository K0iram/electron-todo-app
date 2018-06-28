import React, { Component } from 'react'
import moment from 'moment'

//Components
import ItemCard from './itemCard'
import ReminderForm from '../Form'

//Styles
import './style.css'


class ReminderContainer extends Component {
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

  sendNotification = (mes) => {
    new Notification(`You've got a reminder!`, {body: mes});
  }

  notify = (message, item, index) => {
    new Promise((resolve, reject) => {
      resolve(this.sendNotification(message))
    })
    .then(() => {
      this.undoQueue(item)
      this.removeItem(index)
    })
  }

  onDurationChange = (e) => {
    this.setState({duration: e.target.value})
  }

  render() {
    const { body, duration } = this.state
    return (
      <div>
        <ReminderForm
          reminder={this.state}
          disabled={!body || !duration}
          bodyChange={this.onBodyChange}
          addItem={this.addItem}
          changer={this.onDurationChange}
        />
        <div className="item-container">
        {
          this.state.reminders.map((item, i) =>
            <ItemCard
              reminder={item}
              key={i}
              removeItem={() => this.removeItem(i)}
              notify={() => this.notify(item.body, item, i)}
            />
          )
        }
        </div>
      </div>
    )
  }
}

export default ReminderContainer