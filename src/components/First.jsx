import Second from "./Second";

function First(){
    let firstName = "Shwetank";
    let lastName = "Raj";
    function showName(){
        return firstName + " " +lastName;
    }
    return(
        <>
            <Second></Second>
            <p>{showName()}</p>
            <h2>Name: {firstName} {lastName}</h2> 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, consequatur magnam vel fuga iste soluta corporis! Vero ipsam natus similique!</p> 
        </>
    )
}

export default First;