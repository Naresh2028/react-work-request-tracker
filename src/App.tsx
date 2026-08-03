import { BrowserRouter, Routes, Route } from "react-router-dom";

import WorkRequesList from "./components/workRequest/workRequestList";
import WorkRequestCreate from "./components/workRequest/createWorkRequest";
import WorkRequestDetails from "./components/workRequest/workRequestDetail";
import Navigation from "./components/navigation";
import Home from "./components/home/home";
import ClientPage from "./components/client/ClientPage";

function App() {
  return (
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
  );
}

export default App;
