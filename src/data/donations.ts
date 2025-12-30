export type Donation = {
  id: string;
  donorName: string;
  amount: number;
  date: string;
  channel: "UPI" | "Card" | "Bank" | "Cash";
};

export const donations: Donation[] = [
  { id: "TXN-1001", donorName: "Aarav Sharma", amount: 1500, date: "2025-12-20", channel: "UPI" },
  { id: "TXN-1002", donorName: "Priya Singh", amount: 2500, date: "2025-12-21", channel: "Card" },
  { id: "TXN-1003", donorName: "Rahul Verma", amount: 1000, date: "2025-12-22", channel: "UPI" },
  { id: "TXN-1004", donorName: "Neha Gupta", amount: 3500, date: "2025-12-23", channel: "Bank" },
  { id: "TXN-1005", donorName: "Karan Patel", amount: 2000, date: "2025-12-24", channel: "UPI" },
  { id: "TXN-1006", donorName: "Ananya Rao", amount: 3000, date: "2025-12-25", channel: "Card" },
  { id: "TXN-1007", donorName: "Vikram Joshi", amount: 1800, date: "2025-12-26", channel: "Cash" },
  { id: "TXN-1008", donorName: "Simran Kaur", amount: 2200, date: "2025-12-27", channel: "UPI" },
  { id: "TXN-1009", donorName: "Ayaan Khan", amount: 2700, date: "2025-12-28", channel: "Bank" },
  { id: "TXN-1010", donorName: "Riya Mehta", amount: 3200, date: "2025-12-29", channel: "Card" },
];