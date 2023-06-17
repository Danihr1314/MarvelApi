import React from 'react';

const fetchCharacter = (id) => {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=b6778d9ddac32298a30789d3ec121225&hash=2ef3f5a83d6fbbe20eff6b398ab2f4b9`
  ).then((res) => res.json());
};

export default async function Character({ params }) {
  const { id } = params;
  const singleCharacter = await fetchCharacter(id);
  //console.log(singleCharacter);
  const charArray = singleCharacter.data?.results[0];
  //console.log(charArray);

  return (
    <div>
      <h1>{charArray.name}</h1>
      <img
        src={`${charArray.thumbnail.path}.${charArray.thumbnail.extension}`}
        alt="character photo"
      />
      <p>
        {charArray.description
          ? charArray.description
          : 'Description not founded'}
      </p>
    </div>
  );
}
