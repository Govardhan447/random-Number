// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateNumber = () => {
    const randomNum = Math.round(Math.random() * 100, 100)
    this.setState({randomNumber: randomNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="header">Random Number</h1>
          <p className="paragraph">
           Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.generateNumber}>
            Generate
          </button>
          <p className="random-Number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
