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
