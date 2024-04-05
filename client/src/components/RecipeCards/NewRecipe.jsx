import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipeCard.css';

export const NewRecipe = () => {
    const [recipe, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('/api/recipes')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipes;', error);
            });
    }, []);

    return (
        <div className="recipe-card">
            {recipe.length > 0 ? (
                <>
                    <h2 className="word">{recipe[0].title}</h2>
                    <img src={recipe[0].image} alt={recipe[0].title} />
                    <p className="time">Prep Time: {recipe[0].prepTime}</p>
                    <p className="time">Cook Time: {recipe[0].cookTime}</p>
                    <h3 className="word">Ingredients</h3>
                    <ul className="list">
                        {recipe[0].ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3 className="word">Instructions</h3>
                    <ul className="list">
                        {recipe[0].instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                    <h3 className="word">Description</h3>
                    <ul className="list">
                        {recipe.description.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}