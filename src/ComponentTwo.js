import React  from "react";
class ComponentTwo extends React.Component{

    componentWillUnmount(){
        console.log('Component Two unmounted!!!');
    }

    render(){

        return(
            <div>
                <h2>Component Two</h2>
                <p>This is component two content</p>
            </div>     
        )
    }
}

export default ComponentTwo