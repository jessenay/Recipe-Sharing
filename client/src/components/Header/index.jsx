import { Link } from "react-router-dom";

const Header = ({ loggedIn, setLoggedIn }) => {
  return (
    <header
      className="bg-info mb-4 py-3 display-flex align-center"
      style={{ backgroundColor: "#06052e" }}
    >
      <div className="container flex-row">
        <Link className="text-light mr-auto p-2" to="/">
          <h1
            className="m-0"
            style={{
              fontSize: "26px",
              fontFamily: "Playfair Display",
              fontWeight: 400,
            }}
          >
            Recipe Sharing
          </h1>
        </Link>
        <Link className="text-light p-2" to="/">
          <h1
            className="m-0"
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Home
          </h1>
        </Link>
        <Link className="text-light p-2" to="/profile/:profileId">
          <h1
            className="m-0"
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Profile
          </h1>
        </Link>
        {loggedIn ? (
          <Link
            className="text-light p-2"
            to="/"
            onClick={() => setLoggedIn(!loggedIn)}
          >
            <h1
              className="m-0"
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Logout
            </h1>
          </Link>
        ) : (
          <Link
            className="text-light p-2"
            to="/"
            onClick={() => setLoggedIn(!loggedIn)}
          >
            <h1
              className="m-0"
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Login
            </h1>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
