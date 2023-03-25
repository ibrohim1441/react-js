import React, { useEffect, useState } from 'react'

const url = "https://wizard-world-api.herokuapp.com/Houses";
const Url = () => {
  const [houses, setHouses] = useState([]);
  function data (){
    fetch(url)
    .then((res) => {
      return res.json();
    }).then((res) => {
      setHouses(res);
    }).catch((error) => {
        console.error(error);
    })}
    // data()
   
    useEffect(() => {
      data();
    },[])

    // console.log(houses);

  return (
    <div>
      <ul>
        
        {houses.map((house) => (
          <li key={house.id}>{house.name}</li>
          // <p>Name: {house.name}</p>
        ))}
      </ul>
       <ul>
        
        {houses.map((house) => (
          <li key={house.id}>{house.name}</li>
          // <p>Name: {house.name}</p>
        ))}
      </ul>
    </div>
  )
}


export default Url