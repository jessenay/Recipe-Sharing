import { useState } from 'react';
import './RecipeCard.css';

//Displays Recipe card
const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h2 className="word">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p className="time">Prep Time: {recipe.prepTime}</p>
            <p className="time">Cook Time: {recipe.cookTime}</p>
            <h3 className="word">Ingredients</h3>
            <ul className="list">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3 className="word">Instructions</h3>
            <ul className="list">
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ul>
        </div>
    );
};

//Adds new recipes
const RecipeForm = ({ onAddRecipe }) => {
    const [recipe, setRecipe] = useState({
        title: '',
        image: '',
        prepTime: '',
        cookTime: '',
        ingredients: [],
        instructions: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }))
    };


    const handleAddIngredient = () => {
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            ingredients: [...prevRecipe.ingredients, ''],
        }));
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[index] = value;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            ingredients: newIngredients,
        }));
    };

    const handleAddInstruction = () => {
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            instructions: [...prevRecipe.instructions, ''],
        }));
    };

    const handleInstructionChange = (index, value) => {
        const newInstructions = [...recipe.instructions];
        newInstructions[index] = value;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            instructions: newInstructions,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        onAddRecipe(recipe);
        setRecipe({
            title: '',
            image: '',
            prepTime: '',
            cookTime: '',
            ingredients: [],
            instructions: [],
        });
    };

    return (
        <form className="form" onSubmit={submit}>
            <label className='label'>TITLE:</label>
            <input type="text" name="title" value={recipe.title} onChange={handleChange} require />
            <label className='label'>DESCRIPTION:</label>
            <input type="text" name="description" value={recipe.description} onChange={handleChange} require />
            <label className="label">IMAGE URL:</label>
            <input type="text" name="image" value={recipe.image} onChange={handleChange} require />
            <label className="label">PREP TIME:</label>
            <input type="text" name="prepTime" value={recipe.prepTime} onChange={handleChange} require />
            <label className="label">COOK TIME:</label>
            <input type="text" name="cookTime" value={recipe.cookTime} onChange={handleChange} require />
            <label className="label">INGREDIENTS:</label>
            {recipe.ingredients.map((ingredient, index) => (
                <input
                    key={index}
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    required
                />
            ))}
            <button className="button" type="button" onClick={handleAddIngredient}>Add Ingredient</button>
            <label className="label">INSTRUCTIONS:</label>
            {recipe.instructions.map((instruction, index) => (
                <textarea
                    key={index}
                    value={instruction}
                    onChange={(e) => handleInstructionChange(index, e.target.value)}
                    required
                />
            ))}
            <button className="button" type="button " onClick={handleAddInstruction}>Add Instruction</button>
            <button className="button" type="submit">Add Recipe</button>
        </form>
    );
};

//Displays all recipe cards
const RecipeCards = ({ recipes }) => {
    return (
        <div className="recipe-cards">
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    );
};

const App = () => {
    const [recipes, setRecipe] = useState([]);

    const handleAddRecipe = (newRecipe) => {
        setRecipe([...recipes, newRecipe])
    };

    return (
        <div className="App">
            <h1>Recipes</h1>
            <RecipeForm onAddRecipe={handleAddRecipe} />
            <RecipeCards recipes={recipes} />
        </div>
    );
};

export default App;