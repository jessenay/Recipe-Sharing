import { Link } from "react-router-dom";

const Header = () => {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };

  return (
    <header
      className="bg-info mb-4 py-3 display-flex align-center"
      style={{ backgroundColor: "#06052e" }}
    >
      <div className="container flex-row">
        <Link className="text-light mr-auto p-2" to="/">
          <h1 className="m-0" style={{ fontSize: "22px" }}>
            Recipe Sharing
          </h1>
        </Link>
        <Link className="text-light p-2" to="/">
          <h1 className="m-0" style={{ fontSize: "22px" }}>
            Home
          </h1>
        </Link>
        <Link className="text-light p-2" to="/profile/:profileId">
          <h1 className="m-0" style={{ fontSize: "22px" }}>
            Profile
          </h1>
        </Link>
        {Auth.loggedIn() ? (
          <Link
            className="text-light p-2"
            to="/"
            onClick={logout}
          >
            <h1 className="m-0" style={{ fontSize: "22px" }}>
              Logout
            </h1>
          </Link>
        ) : (
          <Link
            className="text-light p-2"
            to="/"
            onClick={() => setLoggedIn(!loggedIn)}
          >
            <h1 className="m-0" style={{ fontSize: "22px" }}>
              Login
            </h1>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
