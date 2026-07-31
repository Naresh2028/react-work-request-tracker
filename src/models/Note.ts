export interface Note {
    noteId: number;
    description: string;
    workRequestId: number;
}

export interface CreateNoteRequest {
    description: string;
}