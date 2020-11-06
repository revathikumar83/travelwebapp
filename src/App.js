import React, {useState, useEffect} from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://intense-tor-02640.herokuapp.com/tours';

function App() {
const [tours, setTours] = useState([]);
const [loading, setLoading] = useState(true);

const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id)
  setTours(newTours)
}

const fetchTours = async () => {

  try{
const response = await fetch(url);
const tours = await response.json();
setLoading(false);
setTours(tours);

  }catch(error){
    setLoading(false);
    console.log(error);
    
  }
}

useEffect(() => {
  fetchTours();
  }, []);

  if(loading){
    return(
      <div>
        <Loading/>
      </div>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <div className="App">
      
      <Tours tours={tours} removeTour={removeTour}/>
      

    </div>
  );
}

export default App;
