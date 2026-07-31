import { useEffect, useState } from "react";
import ClientService from "../../services/ClientService";
import type { Client } from "../../models/client";

function ClientPage() {
  const [clientName, setClientName] = useState("");
  const [clients, setClients] = useState<Client[]>([]);

  const loadClients = async () => {
    const data = await ClientService.getClients();

    setClients(data);
  };

  const createClient = async () => {
    if (!clientName) {
      return;
    }

    ClientService.createClients({
      clientName: clientName,
    });

    setClientName("");

    await loadClients();
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <>
      <h1>Client Page</h1>
      <hr />
      <h3>Creat Client</h3>

      <input
        type="text"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />

      <button onClick={createClient}>Create</button>

      <hr />

      <h3>Existing Client</h3>
      <ul>
        {clients.map((client) => (
          <li key={client.clientId}>{client.clientName}</li>
        ))}
      </ul>
    </>
  );
}

export default ClientPage;
