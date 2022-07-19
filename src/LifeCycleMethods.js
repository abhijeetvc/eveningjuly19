import React from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }

    componentDidMount(){
        console.log('hiiiiiii', this.state.number);
    }

    componentDidUpdate(){
        console.log('helloooo', this.state.number);
    }

    handleChange=()=>{
        this.setState({number:this.state.number+1})
    }

    toggleComponent=()=>{
        console.log(this.state.number);
        this.setState({number:this.state.number===0?1:0})
    }

    render(){
        const component=this.state.number?
             <ComponentOne/>:<ComponentTwo/>

        return(
            <div>
                <h1>Life Cycle Methods</h1>
                <p>Number : {this.state.number}</p>
                <button type='button' 
                        onClick={this.handleChange}>
                            Click
                        </button>
                <button type='button' 
                        onClick={this.toggleComponent}>
                            Toggle
                        </button>        
                {component}
            </div>
        )
    }
}

export default LifeCycleMethods