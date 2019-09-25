import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location: {pathname}}) => {
    return(
        <nav>
            <Link to='/notes' className={ pathname === '/notes' ? 'selected' : ''}>Notes</Link>
            <Link to='/archived' className={ pathname === '/archived' ? 'selected' : ''}>Archived</Link>
            <Link to='/notes/create' className={ pathname === '/notes/create'? 'selected' : ''}>Create</Link>
        </nav>
    );
}

export default Nav;