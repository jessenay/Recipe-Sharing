export default function RecipeItem(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h3
          style={{
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: 600,
            textTransform:'uppercase',
          }}
        >
          {props.category}
        </h3>
        <h5
          className="card-title"
          style={{
            fontSize: "38px",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          {props.title}
        </h5>
        <p className="card-text">{props.instruction}</p>
        <a href="#" className="card-link">
          View Recipe
        </a>
      </div>
    </div>
  );
}
