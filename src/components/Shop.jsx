import React from 'react';
import { Outlet } from 'react-router-dom';

const Shop = () => {
    return (
        <>
            <h1>Shop</h1>
            <Outlet />
        </>

    )
}

export default Shop;