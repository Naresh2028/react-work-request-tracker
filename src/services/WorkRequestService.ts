import axios from "axios";
import type {
  WorkRequest,
  CreateWorkRequest,
  UpdateStatusRequest,
  WorkRequestQuery,
  PagedResponse
} from "../models/WorkRequest";
import type { CreateNoteRequest, Note } from "../models/Note";

const API_URL = "https://localhost:7231/api/WorkRequest";

const getWorkRequests = async (params:WorkRequestQuery): Promise<PagedResponse<WorkRequest>> => {
  const response = await axios.get<PagedResponse<WorkRequest>>(`${API_URL}`,{params});
  return response.data;
};

const getWorkRequestsById = async (id: number): Promise<WorkRequest> => {
  const response = await axios.get<WorkRequest>(`${API_URL}/${id}`);
  return response.data;
};

const createWorkRequest = async (
  request: CreateWorkRequest,
): Promise<WorkRequest> => {
  const response = await axios.post<WorkRequest>(API_URL, request);

  return response.data;
};

const updateStatus = async (
  id: number,
  request: UpdateStatusRequest,
): Promise<void> => {
  const response = await axios.patch<void>(`${API_URL}/${id}/Status`, request);

  return response.data;
};

const addNotes = async (id: number, note: CreateNoteRequest): Promise<Note> => {
  const response = await axios.post<Note>(`${API_URL}/${id}/Notes`, note);

  return response.data;
};

export default {
  getWorkRequests,
  getWorkRequestsById,
  createWorkRequest,
  updateStatus,
  addNotes,
};
