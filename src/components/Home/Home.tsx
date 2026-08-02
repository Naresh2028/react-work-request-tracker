import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h2 className="display-4">Work Request Tracker System</h2>

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

         
          <div className="card shadow-sm border-0 my-4">
            <div className="card-body">
              <h3 className="mb-4">Project Overview</h3>

              <h5 className="mb-3">Features</h5>

              <ul className="list-group mb-4">
                <li className="list-group-item">Create Clients.</li>

                <li className="list-group-item">
                  Create, edit, and update the status of Work Requests.
                </li>

                <li className="list-group-item">
                  Add multiple Notes to a Work Request to track progress and
                  communication.
                </li>
              </ul>

              <h5 className="mb-3">Relationships</h5>

              <ul className="list-group">
                <li className="list-group-item">
                  One Client can have multiple Work Requests (One-to-Many).
                </li>

                <li className="list-group-item">
                  One Work Request can have multiple Notes (One-to-Many).
                </li>
              </ul>
            </div>
          </div>

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
              <h5 className="text-primary">FUNCTIONALITY</h5>

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
