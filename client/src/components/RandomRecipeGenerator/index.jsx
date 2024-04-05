import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useState, useEffect } from "react";
// import RandomRecipeCard from "../RandomRecipeCard";

// import Auth from "../utils/auth";
// import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
// import { useMutation } from "@apollo/client";
// import { SAVE_BOOK } from "../utils/mutations";

// const searchRecipe = () =>
//   API.search()
//     .then((res) => {
//       console.log(res.data);
//       console.log(res.data.meals);
//       console.log(res.data.meals[0]);
//       console.log(res.data.meals[0].strMeal);
//       // setSearch("");
//     })
//     .catch((err) => console.log(err));


  //   const [saveBook] = useMutation(SAVE_BOOK);

  // create state for holding returned recipe api data
  const [randomRecipe, setRandomRecipe] = useState([]);

  const searchRecipe = () =>
    API.search()
      .then((res) => {
        setRandomRecipe(res.data);
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    searchRecipe();
  }, []);

  //   // create state to hold saved bookId values
  //   const [savedRandomRecipeIds, setavedRandomRecipeIds] = useState(
  //     getSavedBookIds()
  //   );

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  //   useEffect(() => {
  //     return () => saveBookIds(savedBookIds);
  //   });

  // create method to search for books and set state on form submit
  const handleRandomRecipeSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await searchRecipe();

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const randomRecipe = await response.json();

      console.log(randomRecipe);
      //   // I dont understand this
      //   const randomRecipeData = items.map((book) => ({
      //     bookId: book.id,
      //     authors: book.volumeInfo.authors || ["No author to display"],
      //     title: book.volumeInfo.title,
      //     description: book.volumeInfo.description,
      //     image: book.volumeInfo.imageLinks?.thumbnail || "",
      //   }));

      //   setRandomRecipe(randomRecipeData);
    } catch (err) {
      console.error(err);
    }
  };


const RandomRecipeGenerator = () => {
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
          // to="/random-recipe"
          onClick={ handleRandomRecipeSearch }
          // {() => searchRecipe()}
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
};

export default RandomRecipeGenerator;
