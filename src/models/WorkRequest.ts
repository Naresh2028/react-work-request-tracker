import type { Note } from "./note";

export interface WorkRequest {
  workRequestId: number;
  title: string;
  description: string;
  priority: number;
  status: number;
  dueDate: string;
  updateDate?: string;
  clientName: string;
  notes: Note[];
}

export interface CreateWorkRequest {
  title: string;
  description: string;
  priority: number;
  status: number;
  dueDate: string;
  clientId: number;
}

export interface UpdateStatusRequest {
  status: number;
}

export interface WorkRequestQuery {
  pageNumber: number;
  pageSize: number;
  search: string;
  status?: number;
}

export interface PagedResponse<T> {
  items:T[],
  totalItems:number
}