import React from 'react';
import Radium from 'radium';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        ':hover': {
            backgroundColor : 'dark green', 
            color: 'white'
         }
    };

    return (
        <div style={style} onClick={props.clicked}>
        
            {props.character}
        </div>
    );
};

export default Radium(char);