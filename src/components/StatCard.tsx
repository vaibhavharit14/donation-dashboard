type Props = { label: string; value: string; hint?: string };

export default function StatCard({ label, value, hint }: Props) {
  return (
    <div className="rounded-xl bg-[var(--card)] p-4 border border-slate-800 shadow-sm">
      <div className="text-sm text-[var(--muted)]">{label}</div>
      <div className="text-2xl font-semibold mt-1 text-[var(--text)]">{value}</div>
      {hint && <div className="text-xs mt-2 text-slate-400">{hint}</div>}
    </div>
  );
}