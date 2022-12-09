import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        errorStatus:false,
        errorMsg:""
     }  
   }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { errorStatus: true };
  }
 componentDidCatch(error) {
    console.log(error);
    this.setState({errorMsg:"Number is Less than 5!"});
  }
    render() {
        if(this.state.errorStatus===true)
        {
            return <> <h2>{this.state.errorMsg}</h2></>
        }
    return (
      this.props.children
    )
  }
}
