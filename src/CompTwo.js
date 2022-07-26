import React from 'react'

class CompTwo extends React.Component{

    componentWillUnmount(){
        console.log('Comp Two unmounted!!!');
    }

    render(){
        return(
            <div>
                <h1>CompTwo</h1>
                <p>This is Comp Two!!!</p>
            </div>
        )
    }
}

export default CompTwo