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
      <h2>The count is {count}</h2>
      {/* prettier-ignore */}
      <button style={btnSpacing} onClick={() => setCount(prevCount => prevCount - 1)}>
        Get Prev Character
      </button>
      {/* prettier-ignore */}
      <button style={btnSpacing} onClick={() => setCount(prevCount => prevCount + 1)}>
        Get Next Character
      </button>

      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <br />
      <p>{starWarsData.name}</p>
      <p>{starWarsData.gender}</p>
      <p>{starWarsData.birth_year}</p>
      <p>{starWarsData.homeworld}</p>
    </div>
  );
}
