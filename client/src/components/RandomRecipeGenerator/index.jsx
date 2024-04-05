import { Link } from "react-router-dom";
import API from "../../utils/API";

const searchRecipe = () =>
  API.search()
    .then((res) => {
      console.log(res.data);
      console.log(res.data.meals);
      console.log(res.data.meals[0]);
      console.log(res.data.meals[0].strMeal);
    })
    .catch((err) => console.log(err));

export default function RandomRecipeGenerator() {
  return (
    <div className="card pt-4">
      <div className="card-body">
        <h3
          style={{
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Recipe Generator
        </h3>
        <h2
          className="card-title"
          style={{
            fontSize: "45px",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Don't know what to cook?
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "Roboto",
            fontWeight: 400,
            textAlign: "center",
          }}
          className="card-text"
        >
          blablabla
        </p>
        <Link
          className="text-light p-2"
          to="/home"
          onClick={() => searchRecipe()}
        >
          <button
            style={{
              fontSize: "22px",
              fontFamily: "Poppins",
              fontWeight: 500,
              textTransform: "uppercase",
              margin: "20px auto",
              display: "block",
            }}
            href="#"
            className="btn"
          >
            Generate a Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}
