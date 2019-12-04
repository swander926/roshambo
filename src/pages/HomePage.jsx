import React, { useState, useEffect } from 'react'
import HelloWorld from '../components/HelloWorld'

const HomePage = () => {
  const [userChoice, setuserChoice] = useState('')
  const [cpuChoice, setCpuChoice] = useState('')

  const choices = {
    rock: 0,
    paper: 1,
    scissors: 2,
  }

  const result = {
    wins: 0,
    losses: 0,
    ties: 0,
  }

  const roshamboLogic = function(a, b) {
    const processResult = (3 + b - a) % 3
    if (!processResult) {
      ++result['ties']
    } else if (1 == processResult) {
      ++result['losses']
    } else if (2 == processResult) {
      ++result['wins']
    }
    return result
  }

  const userInput = userChoice => {
    setuserChoice(userChoice)
    console.log(userChoice)
  }

  const cpuInput = cpuChoice => {
    setCpuChoice(cpuChoice)
    console.log(cpuChoice)
  }
  if (cpuInput === userInput) {
    return 'Its A Draw!'
  }
  if (
    (cpuInput === 'rock' && userInput === 'paper') ||
    (cpuInput === 'paper' && userInput === 'scissors') ||
    (cpuInput === 'scissors' && userInput === 'rock')
  ) {
    return 'User Wins'
  } else {
    return 'CPU Wins' //maybe remove else
  }

  return (
    <>
      <div className="gameTable">
        <section className="leftUserSide">
          <button
            type="input"
            className="userButtons"
            onClick={() => userInput('Rock')}
          >
            Rock
          </button>
          <button className="userButtons" onClick={() => userInput('Paper')}>
            Paper
          </button>
          <button className="userButtons" onClick={() => userInput('Scissors')}>
            Scissors
          </button>
        </section>
        <section className="rightCpuSide">
          <button className="cpuButtons" onClick={() => cpuInput('Rock')}>
            Rock
          </button>
          <button className="cpuButtons" onClick={() => cpuInput('Paper')}>
            Paper
          </button>
          <button className="cpuButtons" onClick={() => cpuInput('Scissors')}>
            Scissors
          </button>
        </section>
      </div>
    </>
  )
}

export default HomePage
