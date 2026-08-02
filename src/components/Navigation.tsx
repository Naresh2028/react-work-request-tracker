import {Link} from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Work Tracker
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/clients">
            Clients
          </Link>

          <Link className="nav-link" to="/workRequests">
            Work Requests
          </Link>

          <Link className="nav-link" to="/workRequests/create">
            Create Request
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
