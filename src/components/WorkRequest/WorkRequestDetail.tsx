import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { WorkRequest } from "../../models/workRequest";
import WorkRequestService from "../../services/workRequestService";
import { Status } from "../../constants/status";
import { Priority } from "../../constants/priority";

function WorkRequestDetails() {
  const { id } = useParams();

  const [workRequest, setWorkRequest] = useState<WorkRequest | null>(null);
  const [status, setStatus] = useState(1);
  const [note, setNote] = useState("");

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  //Error validation
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadWorkRequest = async () => {
    setHasError(false);
    setErrorMessage("");
    setIsLoading(true);
    try {
      const data = await WorkRequestService.getWorkRequestsById(Number(id));
      setWorkRequest(data);
      setStatus(data.status);
    } catch (error) {
      console.error(error);
      setWorkRequest(null);
      setHasError(true);
      setErrorMessage("Unable to laod Work Request");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadWorkRequest();
  }, [id]);

  const updateStatus = async () => {
      try {
      await WorkRequestService.updateStatus(Number(id), {
        status,
      });

      await loadWorkRequest();
    } catch (error) {
      console.error(error);
      setWorkRequest(null);
      setHasError(true);
      setErrorMessage("Unable to laod Work Request");
    } finally {
      setIsLoading(false);
    }
  };

  // Add Note Feature
  const addNote = async () => {
     try {
      await WorkRequestService.addNotes(Number(id), {
        description: note,
      });

      setNote("");
      await loadWorkRequest();
    } catch (error) {
      console.error(error);
      setWorkRequest(null);
      setHasError(true);
      setErrorMessage("Unable to laod Work Request");
    } finally {
      setIsLoading(false);
    }
  };

  // Loading Option
  if (isLoading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <h5 className="mt-3">Loading work requests...</h5>
      </div>
    );
  }

  //Error Message
  if (hasError) {
    return (
      <div className="alert alert-danger">
        <h5>Unable to load work request</h5>

        <p>{errorMessage}</p>
      </div>
    );
  }

  if (!workRequest) return <h2>No Work Request Found</h2>;

  return (
    <>
      <h2>Work Request Details</h2>

      <p>
        <strong>Title:</strong>
        {workRequest.title}
      </p>

      <p>
        <strong>Description:</strong>
        {workRequest.description}
      </p>

      <p>
        <strong>Client:</strong>
        {workRequest.clientName}
      </p>

      <p>
        <strong>Priority:</strong>
        {Priority[workRequest.priority]}
      </p>

      <p>
        <strong>Status:</strong>
        {Status[workRequest.status]}
      </p>

      <p>
        <strong>Due Date:</strong>
        {new Date(workRequest.dueDate).toLocaleDateString()}
      </p>

      <h3>Update Status</h3>

      <select
        className="form-select"
        value={status}
        onChange={(e) => setStatus(Number(e.target.value))}
      >
        <option value={0}>New</option>
        <option value={1}>In Progress</option>
        <option value={2}>Blocked</option>
        <option value={3}>Completed</option>
      </select>

      <button className="btn btn-primary" onClick={updateStatus}>
        Update Status
      </button>

      <h3>Notes</h3>

      <textarea
        className="form-control"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter note..."
      />

      <button className="btn btn-primary" onClick={addNote}>
        Add Note
      </button>

      <h3>Existing Notes</h3>

      <ul>
        {workRequest.notes.map((note) => (
          <li key={note.noteId}>{note.description}</li>
        ))}
      </ul>
    </>
  );
}

export default WorkRequestDetails;
