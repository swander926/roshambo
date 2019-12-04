import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const PlayerCard = ({ color, symbol }) => {
  const style = {
    backgroundColor: color,
    backgroundImage: 'url(./images/' + symbol + '.png)',
  }

  return (
    <>
      <div style={style} className="player-card"></div>
    </>
  )
}

const choices = {
  rock: 0,
  paper: 1,
  scissors: 2,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.symbols = ['rock', 'paper', 'scissors']
    this.state = {}
  }

  decideWinner = () => {
    const { playerBlue, playerRed } = this.state
    if (playerRed == playerBlue) {
      return "It's a Draw !"
    }
    if (
      (playerRed === 'rock' && playerBlue === 'scissors') ||
      (playerRed === 'paper' && playerBlue === 'rock') ||
      (playerRed === 'scissors' && playerBlue === 'paper')
    ) {
      return 'Red player Wins !'
    }
    return 'Blue player Wins !'
  }

  runGame = () => {
    let counter = 0
    let myInterval = setInterval(() => {
      counter++
      this.setState({
        playerRed: this.symbols[Math.floor(Math.random() * 3)],
        playerBlue: this.symbols[Math.floor(Math.random() * 3)],
      })
      if (counter > 15) {
        clearInterval(myInterval)
        this.setState({ winner: this.decideWinner() })
      }
    }, 100)
  }

  render() {
    return (
      <>
        <div className="App">
          <PlayerCard color="red" symbol={this.state.playerRed} />
          <PlayerCard color="blue" symbol={this.state.playerBlue} />
          <p>{this.state.winner}</p>
          <button onClick={this.runGame}>Run Game</button>
        </div>
      </>
    )
  }
}
export default App
