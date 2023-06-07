import React from 'react';
import Link from 'next/link'

import styles from './NavBar.module.css';

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Comics',
  route: '/Comics'
}, {
  label: 'Characters',
  route: '/Characters'
}, {
  label: 'Stories',
  route: '/Stories'
}, {
  label: 'Series',
  route: '/Series'
}, {
  label: 'Creators',
  route: '/Creators'
}]

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <header>
        <nav>
          <ul className={styles.path}>
            {links.map(({ label, route }) => (
              <li className={styles.menu} key={route}>
                <Link className={styles.link} href={route}>
                  {label}
                </Link>
              </li>
            )
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
