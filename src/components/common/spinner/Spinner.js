import * as React from 'react';

function Spinner(props) {
    const { style } = props;
    return (
        <div className="be-spinner" style={style}>
            <svg width="40px" height="40px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" className="circle" />
            </svg>
        </div>
    );
}

export default Spinner;
