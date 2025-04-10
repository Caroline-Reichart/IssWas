/* import React, { useEffect, useState } from "react";

const Abend = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/data/abend.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div>
            <h1>Abendessen</h1>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Abend; */

import React, { useEffect, useState } from "react";

const Abend = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data/abend.json") // ohne ../ wenn Datei in public/data liegt
      .then((response) => response.json())
      .then((data) => setRecipes(data.Abendessen)) // <-- ACHTUNG: auf .Abendessen zugreifen
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="resultDiv" style={{ padding: "2rem" }}>
      <h1>Rezepte für den Abend</h1>
      {recipes.map((recipe, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ccc", marginBottom: "2rem", marginTop: "100px"}}>
          <h2>{recipe.titel}</h2>
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

export default Abend;
