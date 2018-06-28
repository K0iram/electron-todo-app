import React, { Component } from 'react'

import './style.css'


class Timer extends Component {
  state = {
    timeLeft: this.props.seconds
  }

  componentDidMount() {
    this.timer()
  }

  formatSeconds = (totalSeconds) => {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ":" + seconds;
  }

  onCompleted = () => {
    if(this.state.timeLeft <= 0) {
      this.props.onComplete()
      clearInterval(this.timerId)
    }
  }

  tick = () => {
    this.setState(prevState => ({
      timeLeft: prevState.timeLeft - 1
    }), this.onCompleted)
  }

  timer = () => {
    this.timerId = setInterval(
      () => this.tick(),1000
    )
  }

  render() {
    return (
      <div>
        <p>{this.formatSeconds(this.state.timeLeft)}</p>
      </div>
    )
  }
}

export default Timer