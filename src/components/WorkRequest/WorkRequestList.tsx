import { useCallback, useEffect, useState } from "react";
import type { WorkRequest, WorkRequestQuery } from "../../models/WorkRequest";
import WorkRequestService from "../../services/WorkRequestService";
import { Priority } from "../../Constants/Priority";
import { Status } from "../../Constants/Status";
import { useNavigate } from "react-router-dom";

function WorkRequesList() {
  const [workRequests, setWorkRequest] = useState<WorkRequest[]>([]);

  //Search
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"" | number>("");

  //Pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 5;

  const navigate = useNavigate();

  const totalPages = Math.ceil(totalItems / pageSize);

  const loadWorkRequest = useCallback(async () => {
    const params: WorkRequestQuery = {
      pageNumber,
      pageSize,
      search: search,
      status: status === "" ? undefined : status,
    };

    const data = await WorkRequestService.getWorkRequests(params);

    setWorkRequest(data.items);
    setTotalItems(data.totalItems);
  }, [pageNumber, status, search]);

  const handleSearch = () => {
    if (pageNumber == 1) {
      setPageNumber(1);
    } else {
      loadWorkRequest();
    }
  };

  useEffect(() => {
    loadWorkRequest();
  }, [loadWorkRequest]);

  return (
    <>
      <input className="form-control"
        type="text"
        placeholder="Enter title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select className="form-select"
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

      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>

      <div className="container mt-4">
        <h1>Work Request Lists</h1>

        <table className="table table-bordered table-striped">
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
                    className="btn btn-primary"
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
      </div>
      <button
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber == 1}
      >
        Previous
      </button>
      <span style={{ margin: "0 10px" }}>
        Page {pageNumber} of {totalPages}
      </span>
      <button
        onClick={() => setPageNumber(pageNumber + 1)}
        disabled={pageNumber === totalPages}
      >
        Next
      </button>
    </>
  );
}

export default WorkRequesList;
