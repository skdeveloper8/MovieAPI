
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

import axios from 'axios';
import Card from './components/Card'

function App() {
  const myApiKey = '4b05afbd';

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const url = `https://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`
  async function dataFromApi() {
    setLoading(true);
    let value = await axios.get(url);

    setData(value);
    setLoading(false)
  }
  function changeHandler(e) {
    setMovie(e.target.value)

  }
  useEffect(() => {
    setLoading(true);
    dataFromApi();
  }, [movie]);
  return (
    <div className='app' >
        <h2>Search Any Movie Name Here</h2>
      <input className='Search' type="text"
        placeholder='Search Here'
        // name='movie'
        onChange={changeHandler}

      />

      {
          movie===""||
        loading ? (<Spinner />) : (<Card data={data} />)

      }


    </div>
      

    
  );
}

export default App;
