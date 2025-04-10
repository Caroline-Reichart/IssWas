/* import React, { useEffect, useState } from "react";

const Mittag = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("../data/mittag.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div>
            <h1>Cocktails</h1>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Mittag; */

import React, { useEffect, useState } from "react";

const Mittag = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data/mittag.json") // ohne ../ wenn Datei in public/data liegt
      .then((response) => response.json())
      .then((data) => setRecipes(data.Mittagessen)) // <-- ACHTUNG: auf .Mittagessen zugreifen
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="resultDiv" style={{ padding: "2rem" }}>
      <h1>Rezepte für das Mittagessen</h1>
      {recipes.map((recipe, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ccc", marginBottom: "2rem", marginTop: "100px" }}>
          <h2>{recipe.titel}</h2>
          <img src={recipe.informations.picture} alt="Nice Picture with Food" />
          <p><strong>Zubereitungszeit:</strong> {recipe.informations.zubereitungszeit}</p>
          <p><strong>Portionen:</strong> {recipe.informations.portionen}</p>
          <p><strong>Schwierigkeit:</strong> {recipe.informations.schwierigkeit}</p>
          <a href={recipe.informations.link} target="_blank" rel="noopener noreferrer">
            Originalrezept
          </a>
          <h3>Zutaten</h3>
          <ul>
            {recipe.zutaten.map((zutat, i) => (
              <li key={i}>{zutat}</li>
            ))}
          </ul>
          <h3>Zubereitung</h3>
          <ol>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Mittag;