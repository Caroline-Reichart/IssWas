import React, { useEffect, useState } from "react";

const Fruehstueck = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("../data/fruehstueck.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div>
            <h1>Frühstück</h1>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Fruehstueck;