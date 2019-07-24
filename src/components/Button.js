import React from 'react';
import './Button.css';

class Button extends React.Component {

    render() {
        const { children, handleClick } = this.props;
        return (
            <button className="btn" onClick={handleClick} >
                <span>{children}</span>
            </button>
        );
    }
}

export default Button;