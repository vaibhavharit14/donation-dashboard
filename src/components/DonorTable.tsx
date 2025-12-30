import { donations } from "../data/donations";

export default function DonorTable() {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-800">
      <table className="min-w-full bg-[var(--card)]">
        <thead className="bg-slate-900/40">
          <tr>
            <th className="px-4 py-3 text-left text-sm text-[var(--muted)]">Txn ID</th>
            <th className="px-4 py-3 text-left text-sm text-[var(--muted)]">Donor</th>
            <th className="px-4 py-3 text-left text-sm text-[var(--muted)]">Amount (INR)</th>
            <th className="px-4 py-3 text-left text-sm text-[var(--muted)]">Date</th>
            <th className="px-4 py-3 text-left text-sm text-[var(--muted)]">Channel</th>
          </tr>
        </thead>
        <tbody>
          {donations.map(d => (
            <tr key={d.id} className="border-t border-slate-800">
              <td className="px-4 py-3 text-sm">{d.id}</td>
              <td className="px-4 py-3 text-sm">{d.donorName}</td>
              <td className="px-4 py-3 text-sm">{d.amount.toLocaleString("en-IN")}</td>
              <td className="px-4 py-3 text-sm">{new Date(d.date).toLocaleDateString("en-IN")}</td>
              <td className="px-4 py-3 text-sm">{d.channel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}