import { useState, useEffect } from 'react';

import axios from 'axios';

import "./Country.css";

const Country = () => {

   const [data ,setData] = useState([]);
   const [error, setError] = useState(null);

   const fetchcountry = async () =>{
    try {
      
      const respons = await axios.get(`https://restcountries.com/v3.1/all`);
      console.log(respons);
      setData(respons.data);
      
    } catch (error) {
      setError(error)
    }
   }

     useEffect(() => { 
        fetchcountry()
    }, []);

 
    return (
        <>

        <div className='Country'>
           <ul className='Country_ul'>
                {
                    data.map((element) => (
                        <li key={element.fifa}>{element.fifa}
                        </li>
                    ))
                }
            </ul>
            <ul>
                {
                    data.map((element) => (
                        <p>
                          <img src="flags"/>
                        </p>
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default Country