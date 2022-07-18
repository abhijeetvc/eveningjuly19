import React from 'react'
class ComponentOne extends React.Component{

    componentWillUnmount(){
        console.log('Component One unmounted!!!');
    }

    render(){

        return(
            <div>
                <h2>Component One</h2>
                <p>This is component one content</p>
            </div>     
        )
    }
}

export default ComponentOne