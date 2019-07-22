import React from "react";

const Bio = props => {
  const [homeworld, setHomeworld] = React.useState({});

  const handleHomeworld = () => {
    fetch(props.character.homeworld)
      .then(response => response.json())
      .then(data => setHomeworld(data));
  };

  return (
    <div className="bio">
      <img src="https://source.unsplash.com/random" />
      <h3>{props.character.name}</h3>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <button onClick={handleHomeworld}>See Homeworld Info</button>
      <p>{homeworld.name}</p>
    </div>
  );
};

export default Bio;
