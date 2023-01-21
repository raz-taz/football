import { useEffect, useState } from 'react';
import { getData } from './api';
import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    setData(getData())
  }, [])
  return (
    <div className="App">
      {
        data.map((val, ind)=>{
          return(
            <h1 key={ind}>{val.title}</h1>
          )
        })
      }
    </div>
  );
}

export default App;
