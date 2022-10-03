import './App.css';
import { useCallback,useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';


function App() {
  const [inp , setInp] = useState()

  const [inp2 , setInp2] = useState()

  const getData = useCallback((d)=>{
    console.log(d)
    setInp(d)
  },[])
  const getData2 = useCallback((d)=>{
    console.log(d)
    setInp2(d)
  },[])
 
  return (
    <div className='App'>
      <Component1 getData={getData}/>
      <Component2 val={inp} getData={getData2} />
      <Component3 val={inp2}/>
    </div>
  )
}

export default App;
