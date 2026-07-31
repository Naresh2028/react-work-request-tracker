import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import "./App.css";
import ClientPage from "./components/Client/ClientPage";
import WorkRequesList from "./components/WorkRequest/WorkRequestList";
import WorkRequestCreate from "./components/WorkRequest/CreateWorkRequest";
import WorkRequestDetails from "./components/WorkRequest/WorkRequestDetail";

function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/clients">Clients</Link> |{" "}
        <Link to="/workRequests">Work Requests</Link> |{" "}
        <Link to="/workRequests/create">Create Work Request</Link>
      </nav>

        <Routes>
          <Route path="/" element={<ClientPage />}></Route>

          <Route path="/workRequests" element={<WorkRequesList />}></Route>

          <Route
            path="/workRequests/create"
            element={<WorkRequestCreate />}
          ></Route>

          <Route
            path="/workRequests/:id"
            element={<WorkRequestDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
