import  { useState } from 'react';



const Componenta = () => {
  const [count, setcount] = useState(0);

  const handleCount = () =>{
    return setcount(count + 1)
  }

  const handleminusCount = () =>{
    return setcount(count - 1)
  }

  

  return (
    <div>
      <h1>count{count}</h1>
      <button onClick={handleCount}>+</button>
      <button onClick={handleminusCount}>-</button>
    </div>
  )
}

export default Componenta