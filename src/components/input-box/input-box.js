import React from 'react';

import './input-box.css'

const InputBox = ({ input }) => {
    return (
        <input type = "text" value = { input }  readOnly/>
    );
};

export default InputBox;