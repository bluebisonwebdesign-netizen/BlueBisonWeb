// This file is kept for structure but not currently used
// The application uses in-memory state on the client side

export interface IStorage {
  // Add storage methods here if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
