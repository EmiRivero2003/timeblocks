
export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface Category {
  id: string;
  user_id: string;
  name: string;
  color: string;
  created_at: string;
}

export interface ScheduleBlock {
  id: string;
  user_id: string;
  category_id: string | null;
  title: string;
  description: string | null;
  date: string;
  start_time: string;
  end_time: string;
  recurrence_rule_id: string | null;
  created_at: string;
  updated_at: string;
}

export type RecurrenceFrequency =
  | "daily"
  | "weekly"
  | "monthly";

export interface RecurrenceRule {
  id: string;
  frequency: RecurrenceFrequency;
  interval: number;
  end_date: string;
  weekdays?: number[];
  created_at: string;
}
