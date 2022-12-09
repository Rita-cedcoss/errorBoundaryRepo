import React, { Component } from 'react'

export default class NumberGenerator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         random:5,
      }
    }
    render() {
     
      const handleClick=()=>{
        let minNumber=1;
        let maxNumber=20;
        let rand=minNumber+Math.random()*(maxNumber-minNumber);
        console.log(rand);
        this.setState(
            {
                random:rand,
            }
        )
    }
    if(this.state.random<5){
      throw new Error("Number is less than 5!");
  }
    return (
     <>    
      <div>
        <p>{this.state.random}</p>
        <button onClick={handleClick}>RandomNumberGnerator</button>
      </div>
      </>
    )
  }
}
