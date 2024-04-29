export type User = {
  id: number;
  password: string;
  name: string;
  isAdmin: boolean;
  isClockedIn: boolean;
};

export type Shift = {
  id: number;
  userId: number;
  timeIn: string;
  timeOut: string | null;
};
