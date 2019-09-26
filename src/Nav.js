import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location: {pathname}}) => {
<<<<<<< HEAD
    return (
        <nav>
            <Link to='/notes' className= { pathname === '/notes' ? 'selected' : ''}>Notes</Link>
            <Link to='/archived' className= {pathname === '/archived' ? 'selected' : ''}>Archived</Link>
            <Link to='/notes/create' className= {pathname === '/notes/create' ? 'selected' : ''}>Create</Link>
        </nav>
    )
=======
    return(
        <nav>
            <Link to='/notes' className={ pathname === '/notes' ? 'selected' : ''}>Notes</Link>
            <Link to='/archived' className={ pathname === '/archived' ? 'selected' : ''}>Archived</Link>
            <Link to='/notes/create' className={ pathname === '/notes/create'? 'selected' : ''}>Create</Link>
        </nav>
    );
>>>>>>> origin/master
}

export default Nav;