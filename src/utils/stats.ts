import { donations } from "../data/donations";

export const totalDonationsINR = donations.reduce((sum, d) => sum + d.amount, 0);

export const uniqueDonorsCount = new Set(donations.map(d => d.donorName)).size;

export const donationsByDate = () => {
  const map = new Map<string, number>();
  for (const d of donations) {
    map.set(d.date, (map.get(d.date) ?? 0) + d.amount);
  }
  const entries = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  return {
    labels: entries.map(e => e[0]),
    values: entries.map(e => e[1]),
  };
};