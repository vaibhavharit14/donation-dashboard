import StatCard from "../components/StatCard";
import DonorTable from "../components/DonorTable";
import DonationChart from "../components/DonationChart";
import { totalDonationsINR, uniqueDonorsCount } from "../utils/stats";

export default function Dashboard() {
  const totalINR = totalDonationsINR.toLocaleString("en-IN");
  const donors = uniqueDonorsCount.toString();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Donation Tracking Dashboard</h1>
          <p className="text-slate-400 mt-1">
            Monitoring total funds, donors, and trends — built with React, Tailwind, and Chart.js.
          </p>
        </div>

      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard label="Total donations (INR)" value={`₹ ${totalINR}`} hint="Sum of all transactions" />
        <StatCard label="Number of donors" value={donors} hint="Unique donor names" />
        <StatCard
          label="Average per donation"
          value={`₹ ${(totalDonationsINR / 10).toLocaleString("en-IN")}`}
          hint="Approximate metric"
        />
      </section>

      {/* Chart */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Donation trend</h2>
        <DonationChart />
      </section>

      {/* Table */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Recent donations</h2>
        <DonorTable />
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 pt-6">
        © {new Date().getFullYear()} Cancer Awareness & Support — Demo Dashboard
      </footer>
    </div>
  );
}