import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // let totalPopulation =0;
    // for (let i = 0; i < cart.length; i++) {
    //     const population = cart[i].population;
    //     totalPopulation = totalPopulation + population;
    // }

    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h2>Cart Added:{cart.length} </h2>
            <h2>Total Population: {totalPopulation}</h2>
        </div>
    );
};

export default Cart;