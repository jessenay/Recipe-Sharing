import { Link } from "react-router-dom";
import auth from "../../utils/auth";

const Header = () => {

  return (
    <header
      className="bg-info mb-4 py-3 display-flex align-center"
      style={{ backgroundColor: "#aad15f" }}
    >
      <div className="container flex-row">
        <Link className="text-light mr-auto p-2" to="/home">
          <h1
            className="m-0"
            style={{
              fontSize: "26px",
              fontFamily: "Playfair Display",
              fontWeight: 400,
              color: "#06052e",
            }}
          >
            Feastbook
          </h1>
        </Link>
        <Link className="text-light p-2" to="/home">
          <h1
            className="m-0"
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#06052e",
            }}
          >
            Home
          </h1>
        </Link>
<<<<<<< HEAD
        <Link className="text-light p-2" to={`/profile/`}>
          <h1
            className="m-0"
            style={{
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#06052e",
            }}
          >
=======
        <Link className="text-light p-2" to="/profile">
          <h1 className="m-0" style={{ fontSize: "22px" }}>
>>>>>>> 92a87e938ba25faed7ae735502f8c19c0685a8b9
            Profile
          </h1>
        </Link>
        {auth.loggedIn() ? (
          <Link
            className="text-light p-2"
            to="/"
            onClick={() => auth.logout()}
          >
            <h1
              className="m-0"
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "#06052e",
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
                color: "#06052e",
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
