import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1 className="display-4 fw-bold">Work Request Tracker</h1>

        <p className="lead">
          Manage clients, work requests, status updates, and notes in a modern
          full-stack application.
        </p>

        <Link to="/workRequests" className="btn btn-primary btn-lg">
          Explore Work Requests
        </Link>

        <p className="text-danger mt-3">
          <strong>Note:</strong> This applicaiton hosted on the Azure Free tier.
          The first API request will take a few seconds due to an API Service
          cold start.
        </p>
      </div>

      <div className="card shadow mt-5">
        <div className="card-body p-5">
          <h2>About This Project</h2>

          <p>
            A full-stack Work Request Tracking application built to demonstrate
            clean architecture, RESTful APIs, relational database design, and
            modern React development.
          </p>

          <h4 className="mt-4">Current Features</h4>

          <ul>
            <li>Create and manage Clients</li>
            <li>Create Work Requests</li>
            <li>Search Work Requests</li>
            <li>Filter by Status</li>
            <li>Pagination</li>
            <li>Update Work Request Status</li>
            <li>Add Notes to Work Requests</li>
            <li>View Work Request Details</li>
          </ul>

          <div className="row mt-5">
            <div className="col-md-3">
              <h5 className="text-primary">BACKEND</h5>

              <p>
                ASP.NET Core Web API
                <br />
                Entity Framework Core
                <br />
                SQL Server
              </p>
            </div>

            <div className="col-md-3">
              <h5 className="text-primary">FRONTEND</h5>

              <p>
                React
                <br />
                TypeScript
                <br />
                Axios
                <br />
                React Router
                <br />
                Bootstrap
              </p>
            </div>

            <div className="col-md-3">
              <h5 className="text-primary">DATABASE</h5>

              <p>SQL Server</p>
            </div>

            <div className="col-md-3">
              <h5 className="text-primary">FEATURES</h5>

              <p>
                CRUD Operations
                <br />
                Search
                <br />
                Status Filter
                <br />
                Pagination
                <br />
                Routing
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <h5>Source Code</h5>

            <a
              href="https://github.com/Naresh2028/react-work-request-tracker"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary m-2"
            >
              Frontend Repository
            </a>

            <a
              href="https://github.com/Naresh2028/work-request-tracker"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-secondary m-2"
            >
              Backend Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
