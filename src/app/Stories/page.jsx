import React from 'react';

import styles from './Stories.module.css';

const fetchStories = () => {
  return fetch(
    'https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9'
  ).then((res) => res.json());
};

async function getStories({ params }) {
  const stories = await fetchStories();
  const storieArray = stories.data.results;

  return (
    <div>
      <h1>"Estamos en las stories"</h1>
      <section>
        {storieArray.slice(0, 10).map((storie) => {
          return (
            <div key={storie.id} className={styles.card}>
              <h2>{storie.title}</h2>
              <p>Original Issue: {storie.originalIssue.name}</p>
              <img src={storie.thumbnail} alt="" />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default getStories;
