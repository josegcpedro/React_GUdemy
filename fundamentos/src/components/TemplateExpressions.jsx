import React from 'react';

const TemplateExpressions = () => {
    const data = {
        name: 'John Doe',
        age: 25,
        country: 'USA'
    };

    return ( 
        <div>
            <h1>Hello, {data.name}!</h1>
            <h1>You are from {data.country}!</h1>
            <h1>And you have {data.age} years old!</h1>
        </div>
    );
};

export default TemplateExpressions;
