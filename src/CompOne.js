import React from 'react'

class CompOne extends React.Component{

    componentWillUnmount(){
        console.log('Comp One unmounted!!!');
    }

    render(){
        return(
            <div>
                <h1>CompOne</h1>
                <p>This is Comp One!!!</p>
            </div>
        )
    }
}

export default CompOne