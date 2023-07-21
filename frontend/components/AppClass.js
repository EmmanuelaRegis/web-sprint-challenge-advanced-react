import React from 'react'

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at 



const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
  x: 2,
  y: 2
}

export default class AppClass extends React.Component {
state = initialState

move = (evt) => {
  const direction = evt.target.id
 // const nextIndex = this.getNextIndex(direction)
  console.log('current index', this.state.index)
  if (direction === 'up') {
    if (this.state.index > 2) {
      this.setState({
        ...this.state,
        index: this.state.index - 3,
        steps: this.state.steps + 1,
        x: this.state.x - 1
      })

    } else {
      this.setState ({
        ...this.state,
        message: "you can't go up"
      })
    }
  }

  if (direction === 'down') {
    if (this.state.index < 6 ) {
      this.setState ({
        ...this.state,
        index: this.state. index + 3,
        steps : this.state.steps + 1,
        x: this.state.x + 1
      })
    } else {
      this.setState ({
        ...this.state,
        message: "you can't go down"
      })
    }
  }

  if (direction === 'left') {
    if (this.state.index !== 0 && this.state.index !== 3 && this.state.index !== 6 ) {
      this.setState ({
        ...this.state,
        index: this.state.index - 1,
        steps : this.state.steps + 1,
        y: this.state.y + 1
      })
    } else {
      this.setState ({
        ...this.state,
        message: "you can't go left"
      })
    }
  }

  if (direction === 'right') {
    if (this.state.index !== 2 && this.state.index !== 5 && this.state.index !== 8 ) {
      this.setState ({
        ...this.state,
        index: this.state.index + 1,
        steps : this.state.steps + 1,
        y: this.state.y - 1
      })
    } else {
      this.setState ({
        ...this.state,
        message: "you can't go right"
      })
    }
  }
}
  reset = () => {
    this.setState(initialState)
  };

  onChange = (event) => {
    this.setState ({
      ...this.state,
      email: event.target.value
    })
  };
  

  getNextIndex = (direction) => {
    if(direction = 'up') {
      return index < 3 ? index : index - 3
    } else if (direction = 'down') {
      return index > 5 ? index: index + 3
    } else if (direction = 'left') {
      return (index % 3 === 0) ? index : index - 1
    } else {
       return (index -2) % 3 === 0 ? index :index + 1
      }
  }


  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

 // getXY = () => {
    // It it not necessary to have a state to track the
    // It's enough to know what index the "B" is at, to be able to calculate them.
 //  }

 // getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
 // }

 // reset = () => {
    // Use this helper to reset all states to their initial values.
 // }

 // getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
 // }

 // move = (evt) => {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
 // }

 // onChange = (evt) => {
    // You will need this to update the value of the input.
 // }

  //onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.

 // }

 // toggleTurn = (currentTurn) => {
 //   if (currentTurn === 'B') {
 //     return '0';
 //   } else {
 //     return 'B'
 //   }

 // }
 
  render() {
    const {steps, index, message, email, x, y} = this.state;
    const { className } = this.props;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
        <h3 id="coordinates">Coordinates ({x}, {y})</h3>
          <h3 id="steps">You moved {steps} time{steps !== 1 && 's'}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
                {idx === this.state.index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message" >{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick= {this.move}>LEFT</button>
          <button id="up"onClick= {this.move}>UP</button>
          <button id="right" onClick= {this.move}>RIGHT</button>
          <button id="down" onClick= {this.move}>DOWN</button>
          <button  onClick= {this.reset}id="reset">reset</button>
        </div>
        <form>
          <input onChange={this.onChange} value={email} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
