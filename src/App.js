import { useState } from 'react';
import './App.css';
function App() {
  // const todofromRedux = useSelector(state => state.TodoReducer )
  const [val, setVal] = useState(40)
  const [val2, setVal2] = useState((100 - parseInt(val))/2)
  const [val3, setVal3] = useState(100 - (parseInt(val) + parseInt(val2)))
  const handleChange1 = (e) => {
    if(true){
    // setVal(e.target.value)
    console.log("in foo=>",val ,val2 , val3)
    setVal(e.target.value)
    setVal2(Math.round((100 - parseInt(val))/2))
    setVal3(100 - (parseInt(val) + parseInt(val2)))
    console.log("in foo=>",val ,val2 , val3)
  }
  }
  const handleChange2 = (e) => {
    if( true){
    // setVal(e.target.value)
    setVal2(e.target.value)
    setVal(Math.round(( 100-parseInt(val2) ) /2))
    setVal3(99 - (parseInt(val) + parseInt(val2)))
    console.log("in foo=>",val ,val2 , val3)
  }
  }
  const handleChange3 = (e) => {
    if(true){
    // setVal(e.target.value)
    setVal3(e.target.value)
    setVal(100 - (parseInt(val3) + parseInt(val2)))
    setVal2(Math.round((99 - parseInt(val3))/2))
    console.log("in foo=>",val ,val2 , val3)
  }
  }
  console.log(val ,  val2 , val3, parseInt(val) +  parseInt(val2) + parseInt(val3))
  return (
    <div className="App"> 
      <header>     <h1> Progress App </h1>
      <input type="range" min='0' max="100" value={val} onChange={(e)=> handleChange1(e)} />{val}% <br/>
      <input type="range" min="0" max="100" value={val2} onChange={(e)=> handleChange2(e)}  />{val2}% <br/>
      <input type="range" min="0" max="100" value={val3} onChange={(e)=> handleChange3(e)}  />{val3}% <br/>
      Total  = {parseInt(val) +  parseInt(val2) + parseInt(val3)}
</header>
    </div>
  );
}

export default App;