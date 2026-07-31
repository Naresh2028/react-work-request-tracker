export interface Client {
    clientId: number;
    clientName: string;
}

export interface CreateClientRequest {
    clientName: string;
}