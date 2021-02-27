import React from 'react';
const Country = (props) => {
    // console.log(props.country);
    // console.log(props);
    const {name, population, region, flag} = props.country;
    const countrystyle = {border: '1px solid red', margin:"10px"};
    return (
        <div style={countrystyle}>
            <h2><b>This is: </b>{name}</h2>
            <img src={flag} style={{width:'200px'}} alt=""/>
            <p>THe population: {population}</p>
            <p>The region: {region}</p>
            <button onClick = {() => props.handleAddCountry(props.country)}>Details</button>
        </div>
    );
};

export default Country;