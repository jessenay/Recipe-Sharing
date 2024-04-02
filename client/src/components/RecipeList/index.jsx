const RecipeList = ({ recipes }) => {
  if (!recipes.length) {
    return <h3>No Recipies Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {recipes &&
          recipes.map((recipe) => (
            <div className="card" style="width: 18rem;">
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.instruction}</p>
                <a href="#" className="card-link">
                  View Recipe
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeList;

export default function RecipeList() {
  return (
    <div className="container pt-4">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          title={recipe.title}
          description={recipe.instruction}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default function RecipeItem(props) {
  return (

<div className="card" style="width: 18rem;">
 <div className="card-body">
<h5 className="card-title">{props.title}</h5>
<p className="card-text">{props.instruction}</p>
<a href="#" className="card-link">
View Recipe
</a>
</div>
</div>
  );
}