import { useEffect, useState } from "react";
import type { WorkRequest, WorkRequestQuery } from "../../models/WorkRequest";
import WorkRequestService from "../../services/WorkRequestService";
import { Priority } from "../../Constants/Priority";
import { Status } from "../../Constants/Status";
import { useNavigate } from "react-router-dom";

function WorkRequesList() {
  const [workRequests, setWorkRequest] = useState<WorkRequest[]>([]);

  //Search
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  //Status
  const [status, setStatus] = useState<"" | number>("");

  const loadWorkRequest = async () => {
    const params: WorkRequestQuery = {
      pageNumber: 1,
      pageSize: 10,
      search: search,
      status: status === "" ? undefined : status,
    };

    const data = await WorkRequestService.getWorkRequests(params);

    setWorkRequest(data);
  };

  useEffect(() => {
    loadWorkRequest();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Enter title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value === "" ? "" : Number(e.target.value))
        }
      >
        <option value="">All</option>
        <option value="0">New</option>
        <option value="1">In Progress</option>
        <option value="2">Blocked</option>
        <option value="3">Completed</option>
      </select>

      <button onClick={loadWorkRequest}>Search</button>

      <h1>Work Request Lists</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Client</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {workRequests.map((workRequest) => (
            <tr key={workRequest.workRequestId}>
              <td>{workRequest.title}</td>
              <td>{workRequest.clientName}</td>
              <td>{Priority[workRequest.priority]}</td>
              <td>{Status[workRequest.status]}</td>
              <td>{workRequest.dueDate}</td>
              <td>
                <button
                  onClick={() =>
                    navigate(`/workRequests/${workRequest.workRequestId}`)
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default WorkRequesList;
