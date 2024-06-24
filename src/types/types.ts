export type User = {
  id: number;
  password: string;
  name: string;
  isAdmin: boolean;
  isClockedIn: boolean;
};

export type Shift = {
  userId: string;
  startTime: string;
  endTime: string | null;
  createdAt: string;
};

export type ToastMessage = {
  title: string;
  description: string;
};
