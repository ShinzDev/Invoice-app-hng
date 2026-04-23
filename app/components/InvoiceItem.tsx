// components/InvoiceItem.tsx
import StatusBadge from "./StatusBadge";
import { ChevronRight } from "lucide-react"; // Using lucide-react for the arrow

interface InvoiceProps {
  id: string;
  dueDate: string;
  client: string;
  amount: string;
  status: 'paid' | 'pending' | 'draft';
}

export default function InvoiceItem({ id, dueDate, client, amount, status }: InvoiceProps) {
  return (
    <div className="flex items-center justify-between bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-transparent hover:border-purple-500 transition-colors cursor-pointer group">
      <div className="flex items-center gap-6 flex-1">
        <span className="font-bold text-gray-900 w-20"><span className="text-gray-400">#</span>{id}</span>
        <span className="text-gray-400 text-sm">Due {dueDate}</span>
        <span className="text-gray-400 text-sm flex-1">{client}</span>
      </div>
      
      <div className="flex items-center gap-8">
        <span className="font-bold text-lg text-gray-900">£ {amount}</span>
        <StatusBadge status={status} />
        <ChevronRight className="text-purple-500 group-hover:translate-x-1 transition-transform" size={16} />
      </div>
    </div>
  );
}