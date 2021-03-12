import React, { useState, useMemo } from "react";
import TinderCard from "react-tinder-card";
const db = [
  {
    name: "Richard Hendricks",
    url:
      "https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg"
  },
  {
    name: "Erlich Bachman",
    url:
      ".https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg"
  },
  {
    name: "Monica Hall",
    url:
      "https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg"
  },
  {
    name: "Jared Dunn",
    url: "./img/jared.jpg"
  },
  {
    name: "Dinesh Chugtai",
    url: "./img/dinesh.jpg"
  }
];

const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Advanced() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div>
   
      <h1>React Tinder Card</h1>
      <div className="cardContainer">
        {characters.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
  
    </div>
  );
}

export default Advanced;
