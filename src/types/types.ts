export type filterByCurrency = "HUF" | "USD" | "ALL";

export type SortingDirection =
  | "date-asc"
  | "date-des"
  | "amount-asc"
  | "amount-des";

export interface Spending {
  amount: number;
  currency: "HUF" | "USD";
  description: string;
  spent_at: string;
  id: number;
}

export interface ActionBarProps {
  setFilteredData: React.Dispatch<React.SetStateAction<Spending[]>>;
  data: Spending[];
  isLoading: boolean;
}

export interface SpendingsProps {
  spending: Spending;
}
