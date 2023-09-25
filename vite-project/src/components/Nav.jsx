import React from 'react';

function Nav(){
    const location = useLocationa();

    return (
        <nav className='nav'>
            <ul>
            <li>
            <a href='/About'>About</a>
            </li>
            <li>
                <a href='/Portfolio'>Portfolio</a>
            </li>
            <li>
                <a href='/Resume'>Resume</a>
            </li>
            <li>
                <a href='/Contact'>Contact</a>
            </li>
            </ul>
        </nav>
    );

}

export default Nav;