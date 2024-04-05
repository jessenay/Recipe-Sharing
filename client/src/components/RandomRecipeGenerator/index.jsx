import { Link } from "react-router-dom";


// const searchRandomRecipe = () =>
//   API.searchRecipe()
//     .then((res) => {
//       console.log(res.data);
//       console.log(res.data.meals);
//       console.log(res.data.meals[0]);
//       console.log(res.data.meals[0].strMeal);
//       setResult(res.data);
//     })
//     .catch((err) => console.log(err));

      // useEffect(() => {
      //   searchMovie("The Matrix");
      // }, []);

      // const handleRandomRecipeClick = () => {
      //   navigate("/random-recipe");
      //   searchRandomRecipe();
      // };


import { useState, useEffect } from "react";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";

// import Auth from "../../utils/auth";
import { searchRecipe } from "../../utils/API";
// import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
import { useMutation } from "@apollo/client";
// import { SAVE_BOOK } from "../utils/mutations";

const SearchRandomRecipe = () => {
//   const [saveBook] = useMutation(SAVE_BOOK);
  // create state for holding returned google api data
  const [randomRecipe, setRandomRecipe] = useState([]);
  // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState("");

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
  }};

//   // create function to handle saving a book to our database
//   const handleSaveBook = async (bookId) => {
//     // find the book in `searchedBooks` state by the matching id
//     const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const { data } = await saveBook({
//         variables: { book: bookToSave },
//       });

//       // if book successfully saves to user's account, save book id to state
//       setSavedBookIds([...savedBookIds, bookToSave.bookId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };


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
          to="/random-recipe"
          onClick={handleRandomRecipeSearch}
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
}

export default RandomRecipeGenerator;
