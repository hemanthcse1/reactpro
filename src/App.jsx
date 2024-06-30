import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import FruitsTwo from "./components/FruitsTwo"

function App() {
  // const seatNumbers = [1, 4, 7];
  // const person={
  //   name:"Hemanth",
  //   message:"Hi there!",
  //   emoji:"👋",
  //   seatNumbers: [1,4,7]
  // }
  return (
    <div className="App">
      {/* <Hello person={person}/> */}
      {/* <Fruits /> */}

      <FruitsTwo />
    </div>
  );
}

export default App;
