import { BsChevronLeft } from 'react-icons/bs';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="order">Order</NavLink>
        </nav>
    )
}

export default Nav;