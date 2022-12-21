import Link from 'next/link';
import React, { FC } from 'react';
import styles from '../styles/Navbar.module.scss';

const NavBar:FC = () => {
    return (
        <nav className={styles.mainBar}>
            <ul>
                <li className={styles.item}><Link href='/'>Home</Link></li>
                <li className={styles.item}>Beaver Camps</li>
                <li className={styles.item}>Robot</li>
                <li className={styles.item}><Link href='/members/#members' scroll={true}><a>Members</a></Link></li>
                <li className={styles.item}><Link href='/members/#mentor' scroll={true}><a>Mentors</a></Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;