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
}

export default class AppClass extends React.Component {
state = initialState

move = (evt) => {
  const direction = evt.target.id
  const nextIndex = this.getNextIndex(direction)
  console.log('current index', this.state.index)
  console.log('next index', nextIndex)
  if (nextIndex !== this.state.index) {
    this.setState({
      ...this.state,
      steps: this.state.steps + 1,
      message: 'initialMessage',
      index: nextIndex 
    })
  } else {
    this.setState({
      ...this.state,
      message: `you can't go ${direction}`
    })
  }
}
  // handleClick =  (direction) => {
  //   if(direction = 'left') {
  //     if(this.state.index === 0 || this.state.index === 3 || this.state.index === 6) {
  //       this.setState({
  //         ...this.state, 
  //         message: 'you cannot move left'
  //       })
  //     } else {
  //       this.setState({
  //         ...this.state,
  //         index: this.state.index - 1
  //       })
  //     }
  //   }

  getNextIndex = (direction) => {
    if(direction = 'upon') {
      return index < 3 ? index : index - 3
    } else if (direction = 'down') {
      return index > 5 ? index: index + 3
    } else if (direction = 'left') {
      return (index % 3 === 0) ? index : index - 1
    } else {
       return (index -2) % 3 === 0 ? index :index + 1
      }
  }
   // if(initialIndex[idx]) {
    //  this.setState({
    //    ...this.state,
   //     message: ' Wrong'
   //   })
   // } else {

  //  }
  //console.log(idx);
 //   const newInitialIndex = [initialIndex];
 //   newInitialIndex[idx] = initialSteps;
 //   this.setState({
 //     ...this.state,
 //     initialIndex: newInitialIndex,
 //     currentTurn: this.toggleTurn(initialIndex),
 //   });

  toggleTurn = (currentTurn) => {
    if (currentTurn === 'B') {
      return '0';
    } else {
      return 'B'
    }

  }

  reset = () => {
    this.setState({
      initialState
    })
    
  };
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

  render() {
    const {steps, index, message, email} = this.state;
    const { className } = this.props;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{initialMessage}</h3>
          <h3 id="steps">You moved {initialSteps} times</h3>
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
          <button id="upon"onClick= {this.move}>UP</button>
          <button id="right" onClick= {this.move}>RIGHT</button>
          <button id="down" onClick= {this.move}>DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
