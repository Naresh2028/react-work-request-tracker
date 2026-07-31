import axios from "axios";
import type { Client, CreateClientRequest } from "../models/Client";

const API_URL = "https://localhost:7156/api/Client";

const getClients = async (): Promise<Client[]> => {
  const response = await axios.get<Client[]>(API_URL);
  return response.data;
};

const createClients = async (client: CreateClientRequest): Promise<Client> => {
  const response = await axios.post<Client>(API_URL, client);
  return response.data;
};

export default {
  getClients,
  createClients,
};
