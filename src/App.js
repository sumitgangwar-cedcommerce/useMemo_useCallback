import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';


function App() {
  const [nums , setNums] = useState({1:0 , 2:0})
  const [change , setChange] = useState(false)
  const [sum , setSum] = useState()

  const style = {
    color : change ? "White" : "Black",
    backgroundColor : change ? "Steelblue" : "slategray"
  }

  const addNums = ()=>{
    setSum(Number(nums[1])+Number(nums[2]))
  }

  const multiply = useMemo(()=>{
    console.log("Product =>",Number(nums[1]*Number(nums[2])))
  },[nums])



  
  return (
    <div className="App">
      <input type='number' onChange={(event)=>{nums[1] = event.target.value;setNums({...nums})}} /><br />
      <input type='number' onChange={(event)=>{nums[2] = event.target.value;setNums({...nums})}} /><br />
      <button onClick={addNums}>Add</button><br />
      Sum = {sum}<br />
      {multiply}
      <button style={style} onClick={()=> setChange(!change)}>Toggle Button color</button>
    </div>
  );
}

export default App;
