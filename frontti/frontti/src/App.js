import {useState, useEffect} from "react";
import axios from 'axios';

const URL ="http://localhost/mywebservicelist/index.php";

function App() {
  const [names, setNames] = useState([]);
  //const [origin, setOrigin] = useState('');

  useEffect(getData, [])

    function getData() {
    axios.get(URL)
    .then((response) =>{
      console.log()
      setNames(response.data)
      console.log(response.data)
    }).catch(error => {
      alert(error)
    });
}
  

  return (
    <div style={{padding: 30}}>
      <h3>Names</h3>
      <ol>
        {names.map(person =>(
          <li>{person.lastname}, {person.firstname}, {person.email}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
