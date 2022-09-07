import Link from 'next/link';
import React, { FC } from 'react';

const NavBar:FC = () => {
    return (
        <nav>
            <ul>
                <li style={{ display: 'inline', padding: '5px' }}><Link href='/'>Home</Link></li>
                <li style={{ display: 'inline', padding: '5px' }}>Beaver Camps</li>
                <li style={{ display: 'inline', padding: '5px' }}>Robot</li>
                <li style={{ display: 'inline', padding: '5px' }}><Link href='/members'>Members & Mentors</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;