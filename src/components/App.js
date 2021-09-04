import '../App.css';
import MainContainer from './MainContainer';
import { useEffect, useState } from "react"




function App() {
// const [test, setTest] = useState([])

// useEffect(() => {
//   fetch('https://mighty-plains-91573.herokuapp.com/tests')
//   .then(response => response.json())
//   .then(data => setTest(data));
// },[])

// console.log(test)

  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
