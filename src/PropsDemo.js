
// Props (Properties) - information that is passed 
     //    from one component to another component.
     // Props are immutable

function PropsDemo(){

    const message="Hellooooo"

    const person={
        name:"Abc",
        city:"pune"
    }

    return(
        <div>
            <h1>Props Demo!!!</h1>
            <ChildComponent message={message} person={person}/>
        </div>
    )
}     

function ChildComponent({message,person}){

    return(
        <div>
            <h2>Test Props</h2>
            <p>Message : {message}</p>
            <p>Name : {person.name}</p>
            <p>City : {person.city}</p>
        </div>
    )
}

export default PropsDemo