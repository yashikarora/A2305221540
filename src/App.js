import React, {useState} from 'react';
import axios from 'axios';

function App(){
    const [numberId, setNumberId] = useState('');
    const [value, setValue] = useState('');
    const [average, setAverage] = useState(null);

    const handleSUbmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post('http://localhost:9876/average', {
            numberId,
            value: parseFloat(value)
        }
    );
    alert('Number added successfully');
    setNumberId('');
    setValue('');
   } catch(error){
    alert('Failed to add number');
    }
};
return {
    <div>
      <h1>Average Calculator</h1>
      <form onSubmit={handleSubmit}>
      <div>
      <label>Number Id: </label>
      <input
      type="text"
      value={numberId}
      onChange={(e) => setNumberId((e.target.value))}
      </div>
      </form>
}