import { useEffect, useState } from "react";
import type { Client } from "../../models/Client";
import ClientService from "../../services/ClientService";
import WorkRequestService from "../../services/WorkRequestService";
import type { CreateWorkRequest } from "../../models/WorkRequest";
import { useNavigate } from "react-router-dom";

function WorkRequestCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);
  const [status, setStatus] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const [clientId, setClientId] = useState(0);

  //Navigation
  const navigate = useNavigate();

  const [clients, setClients] = useState<Client[]>([]);

  const loadClients = async () => {
    const data = await ClientService.getClients();

    setClients(data);
  };

  useEffect(() => {
    loadClients();
  }, []);

  const createWorkRequest = async () => {
    const request: CreateWorkRequest = {
      title,

      description,

      priority,

      status,

      dueDate,

      clientId,
    };

    await WorkRequestService.createWorkRequest(request);

    navigate("/workRequests");
  };

  return (
    <>
    <h2>Create Work Request</h2>
      {/* Work Request Form */}
      <input className="form-control"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea className="form-control"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <select
        className="form-select"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      >
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>

      <br />

      <select className="form-select"
        value={status}
        onChange={(e) => setStatus(Number(e.target.value))}
      >
        <option value={0}>New</option>
        <option value={1}>In Progress</option>
        <option value={2}>Blocked</option>
        <option value={3}>Completed</option>
      </select>

      <br />

      <input className="form-select"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <br />

      {/* Client Dropdown */}
      <select
        className="form-select"
        value={clientId}
        onChange={(e) => setClientId(Number(e.target.value))}
      >
        <option value={0}>Select Client</option>

        {clients.map((client) => (
          <option key={client.clientId} value={client.clientId}>
            {client.clientName}
          </option>
        ))}
      </select>

      <br />

      <button className="btn btn-primary" onClick={createWorkRequest}>Create</button>


      
    </>
  );
}

export default WorkRequestCreate;
