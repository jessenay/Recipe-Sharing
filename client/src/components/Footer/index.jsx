import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer
      className="w-100 mt-auto text-dark p-4 align-center"
      style={{ backgroundColor: "#06052e" }}
    >
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4 className="text-light">
          &copy; {new Date().getFullYear()} - Recipe Sharing
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
