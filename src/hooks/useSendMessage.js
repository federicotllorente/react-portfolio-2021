import { useState } from 'react';

const useSendMessage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleChange = (e, input) => {
        if (input === 'name') setName(e.target.value);
        if (input === 'email') setEmail(e.target.value);
        if (input === 'message') setMessage(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (!name || !email || !message) {
            console.log('There is missing data');
        } else {
            sendMessage('/contact', { name, email, message })
                .then(data => console.log(data))
                .catch(err => console.error(err));
            setName('');
            setEmail('');
            setMessage('');
        }
    };
    const sendMessage = async (api_url, data) => {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response.json();
    };
    return {
        name, email, message,
        handleChange, handleSubmit
    };
};

export default useSendMessage;