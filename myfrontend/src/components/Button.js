// Create UI components for different UI elements

jsx

import React from 'react';

const Button = ({label, onClick}) => {
    return (
        <button onClick={onClick}>Button</button>
    )
}

export default Button;