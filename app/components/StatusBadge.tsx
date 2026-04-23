
const statusStyles = {
  paid: "bg-emerald-50 text-emerald-500",
  pending: "bg-orange-50 text-orange-400",
  draft: "bg-gray-100 text-gray-600",
};

export default function StatusBadge({ status }: { status: 'paid' | 'pending' | 'draft' }) {
  return (
    <div className={`flex items-center justify-center gap-2 w-24 py-3 rounded-md font-bold capitalize ${statusStyles[status]}`}>
      <span className={`h-2 w-2 rounded-full bg-current`} />
      {status}
    </div>
  );
}