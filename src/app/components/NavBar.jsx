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
  label: 'Movies',
  route: '/Movies'
}, {
  label: 'Games',
  route: '/Games'
}, {
  label: 'Videos',
  route: '/Videos'
}]

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <header>
        <nav>
          <ul className={styles.path}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>
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
