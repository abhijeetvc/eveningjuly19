import React from 'react'

// function StateDemo(){

//     //let message="Helloooo"
        // useState --> hook = function
//     const[message,setMessage]=React.useState("")

//     const check=()=>{
//         //message="Hiiiii"
//         setMessage("Hiiiiiii")
//       //  console.log(message);
//     }

//     return(
//         <div>
//             <h1>State Demo!!!</h1>
//             <p>Message : {message}</p>
//             <button type="button" onClick={check}>Check</button>
//         </div>
//     )
// }

// OOPs //Component --> Class --> Inheritance
class StateDemo extends React.Component{
    constructor(){
        super()
        this.state={
            message:'Helloooo'
        }
    }
     check=()=>{
        this.setState({message:"Hiiiiiii"})
    }

    render(){
    return(
        <div>
            <h1>State Demo!!!</h1>
            <p>Message : {this.state.message}</p>
            <button type="button" onClick={this.check}>
                Check</button>
        </div>
    )
    }
}

export default StateDemo