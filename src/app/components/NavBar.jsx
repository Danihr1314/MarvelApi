import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <li>
        <ul>
          <a href="/home">Home</a>
        </ul>
        <ul>
          <a href="/comics">Comics</a>
        </ul>
        <ul>
          <a href="characters">Characters</a>
        </ul>
        <ul>
          <a href="movies">Movies</a>
        </ul>
        <ul>
          <a href="shows">TV Shows</a>
        </ul>
        <ul>
          <a href="games">Games</a>
        </ul>
        <ul>
          <a href="videos">Videos</a>
        </ul>
      </li>
    </div>
  );
};

export default NavBar;
