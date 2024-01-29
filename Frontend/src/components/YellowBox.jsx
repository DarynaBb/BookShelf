// YellowBox.jsx
import React from 'react';

const YellowBox = ({ children }) => {
    return (
        <div className="bg-yellow-200 p-4 rounded-lg">
            <p>{children}</p>
        </div>
    );
};

export default YellowBox;
