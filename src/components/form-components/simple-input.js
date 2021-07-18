import React from 'react';


const SimpleInput = ({input, meta, ...props}) => {

    const error = meta.touched && meta.error;
    let styles;
    if (error) {
        styles = {
            border: 'solid crimson 2px'
        }
    }

    return(
        <div>
            <div>
                <input {...input} {...props} style={styles}/>
            </div>
            {error && <span style={{color: 'crimson', fontSize: 14}}>{meta.error}</span>}
        </div>
    )
} 

export default SimpleInput;