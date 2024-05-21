jsx

import React, {useState} from "react";
import axios from 'axios';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/ui-elements', 
            {data: inputValue});
            console.log('Reesponse from backend: ', response.data);
            // Handle the response data as needed
        } catch (error) {
            console.error('Error sending data: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;