import { useEffect, useState } from "react";
import ClientService from "../../services/ClientService";
import type { Client } from "../../models/Client";

function ClientPage() {
  const [clientName, setClientName] = useState("");
  const [clients, setClients] = useState<Client[]>([]);

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  //Error validation
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadClients = async () => {
    setHasError(false);
    setErrorMessage("");
    setIsLoading(true);

    try {
      const data = await ClientService.getClients();

      setClients(data);
    } catch (error) {
      console.error(error);
      setHasError(true);
      setErrorMessage("Unable to laod client Request");
    } finally {
      setIsLoading(false);
    }
  };

  const createClient = async () => {
    setHasError(false);
    setErrorMessage("");
    setIsLoading(true);
    try {
      if (!clientName) {
        return;
      }

      await ClientService.createClients({
        clientName: clientName,
      });

      setClientName("");

      await loadClients();
    } catch (error) {
      console.error(error);
      setHasError(true);
      setErrorMessage("Unable to Create client Request");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  // Loading Option
  if (isLoading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <h5 className="mt-3">Loading, Please wait ...</h5>
      </div>
    );
  }

  return (
    <>
      <h1>Client Page</h1>
      <hr />
      <h3>Creat Client</h3>

      {hasError && (
        <div className="alert alert-danger">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}

      <div className="input-group shadow-sm">
        <input
          className="form-control"
          type="text"
          value={clientName}
          placeholder="Enter Client Name..."
          onChange={(e) => setClientName(e.target.value)}
        />

        <button className="btn btn-primary" onClick={createClient}>
          Create
        </button>
      </div>

      <hr />

      <h3>Existing Client</h3>
      {clients.length === 0 ? (
        <div className="alert alert-info">No client result found.</div>
      ) : (
        <ul>
          {clients.map((client) => (
            <li key={client.clientId}>{client.clientName}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ClientPage;
