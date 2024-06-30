

export default function Button() {

    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);


    // return(
    //     <button onClick={handleClick}>Click me 😊</button>
    // );

    // return(
    //     <button onClick={() => handleClick2("Bro")}>Click me 😊</button>
    // )


    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    // return(
    //     <button onClick={() => handleClick("Hemanth")}>Click me 😊</button>
    // );


    // event parameter

    // const handleClick = (e) => e.target.textContent = "OUCH ☹️";

    // return(
    //     <button onClick={(e) => handleClick(e)}>Click me 😊</button>
    // );


    // on DOuble click

    const handleClick = (e) => e.target.textContent = "OUCH 👋";

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click me 😊</button>
    )
}