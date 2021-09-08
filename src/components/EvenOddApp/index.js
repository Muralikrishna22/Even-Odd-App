import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNum = Math.floor(Math.random() * 101)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  isEvenOrOdd = () => {
    const {count} = this.state

    if (count % 2 === 0) {
      return 'Count is Even'
    }
    return 'Count is Odd'
  }

  render() {
    const {count} = this.state
    const typeOfNum = this.isEvenOrOdd()
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Count <span className="count">{count}</span>
          </h1>
          <p className="description">{typeOfNum}</p>
          <button className="increment-btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
