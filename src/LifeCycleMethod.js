import React from 'react'

class LifeCycleMethod extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }
    componentDidMount(){
        console.log('In component did mount!!!');
    }
    componentDidUpdate(){
        console.log('In component did update!!!');
    }

    add=()=>{
        this.setState({number:this.state.number+1})
    }

    render(){
        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <p>Number is: {this.state.number}</p>
                <button type='button' 
                     onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default LifeCycleMethod