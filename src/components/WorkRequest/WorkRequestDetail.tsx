import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { WorkRequest } from "../../models/WorkRequest";
import WorkRequestService from "../../services/WorkRequestService";
import { Status } from "../../Constants/Status";
import { Priority } from "../../Constants/Priority";

function WorkRequestDetails() {
  const { id } = useParams();

  const [workRequest, setWorkRequest] = useState<WorkRequest | null>(null);

  const [status, setStatus] = useState(1);

  const [note, setNote] = useState("");

  const loadWorkRequest = async () => {
    const data = await WorkRequestService.getWorkRequestsById(Number(id));

    setWorkRequest(data);

    setStatus(data.status);
  };

  useEffect(() => {
    loadWorkRequest();
  }, []);

  const updateStatus = async () => {
    await WorkRequestService.updateStatus(Number(id), {
      status,
    });

    await loadWorkRequest();
  };

  // Add Note Feature
  const addNote = async () => {
    await WorkRequestService.addNotes(Number(id), {
      description: note,
    });

    setNote("");

    await loadWorkRequest();
  };

  if (!workRequest) return <h2>Loading...</h2>;

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
        value={status}
        onChange={(e) => setStatus(Number(e.target.value))}
      >
        <option value={0}>New</option>
        <option value={1}>In Progress</option>
        <option value={2}>Blocked</option>
        <option value={3}>Completed</option>
      </select>

      <button onClick={updateStatus}>Update Status</button>

      <h3>Notes</h3>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter note..."
      />

      <button onClick={addNote}>Add Note</button>

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
