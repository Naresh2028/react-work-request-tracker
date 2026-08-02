import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ClientPage from "./components/Client/ClientPage";
import WorkRequesList from "./components/WorkRequest/WorkRequestList";
import WorkRequestCreate from "./components/WorkRequest/CreateWorkRequest";
import WorkRequestDetails from "./components/WorkRequest/WorkRequestDetail";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <div className="container mt-4">
          <Routes>
            <Route path="/clients" element={<ClientPage />}></Route>

            <Route path="/" element={<Home />}></Route>

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
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
