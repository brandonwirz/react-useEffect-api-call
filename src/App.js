import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(
    function () {
      // console.log("Effect ran");
      // prettier-ignore
      fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data));
    },
    [count]
  );

  const btnSpacing = {
    marginRight: "5px",
  };

  return (
    <div>
      <h5>Name: {starWarsData.name}</h5>
      <br />
      {/* prettier-ignore */}
      <button style={btnSpacing} onClick={() => setCount(prevCount => prevCount - 1)}>
        Get Prev Character
      </button>
      {/* prettier-ignore */}
      <button style={btnSpacing} onClick={() => setCount(prevCount => prevCount + 1)}>
        Get Next Character
      </button>
      {/* brings in entire api object */}
      {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
      <br />
      <ul>
        <li>
          <h3>{starWarsData.name}</h3>
        </li>
        <li>
          <span class="bold">Height:</span> {starWarsData.height}
        </li>
        <li>
          <span class="bold">Mass:</span> {starWarsData.mass}
        </li>
        <li>
          <span class="bold">Hair Color:</span> {starWarsData.hair_color}
        </li>
        <li>
          <span class="bold">Skin Color:</span> {starWarsData.skin_color}
        </li>
        <li>
          <span class="bold">Eye Color:</span> {starWarsData.eye_color}
        </li>
        <li>
          <span class="bold">Birth Year:</span> {starWarsData.birth_year}
        </li>
        <li>
          <span class="bold">Homeworld:</span> {starWarsData.homeworld}
        </li>
      </ul>
    </div>
  );
}
