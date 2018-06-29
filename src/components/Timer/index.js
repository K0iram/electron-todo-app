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
      seconds = `0${seconds}`
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    return `${minutes}:${seconds}`
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

  onCompleted = () => {
    if(this.state.timeLeft <= 0) {
      this.props.onComplete()
      clearInterval(this.timerId)
    }
  }

  render() {
    return (
      <div className="countdown-container">
        <div className="countdown">
          <svg>
            <circle r="18" cx="20" cy="20" style={{animation: `countdown ${this.props.seconds}s linear infinite forwards`}}></circle>
          </svg>
        </div>
        <div className="countdown-number">
          <p>{this.formatSeconds(this.state.timeLeft)}</p>
        </div>
      </div>
    )
  }
}

export default Timer