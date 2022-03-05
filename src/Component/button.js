import React from 'react';

const Button = ({btnText, className, onClick, disable}) => {
    return (
            <button className= {className} onClick={onClick} disabled = {disable}>{btnText}</button>
    )
}
export default Button;