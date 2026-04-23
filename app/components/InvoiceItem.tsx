
export default function InvoiceItem({ id, dueDate, client, amount, status }: any) {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm flex items-center justify-between border border-transparent hover:border-[#7c5dfa] transition-all mb-4 group">
      {/* Left side: ID, Date, Name */}
      <div className="flex items-center gap-4 lg:gap-8 flex-1">
        <span className="font-bold text-xs lg:text-sm text-[#0c0e16] w-16">
          <span className="text-[#7e88c3]">#</span>{id}
        </span>
        <span className="text-[#7e88c3] text-xs lg:text-sm hidden sm:block">Due {dueDate}</span>
        <span className="text-[#858bb2] text-xs lg:text-sm">{client}</span>
      </div>

      {/* Right side: Amount, Status, Arrow */}
      <div className="flex items-center gap-4 lg:gap-8">
        <span className="font-bold text-base lg:text-lg text-[#0c0e16]">£ {amount}</span>
        <div className="w-24 flex justify-center">
          {/* Status Badge Component goes here */}
          <span className="capitalize py-2 px-4 rounded-md font-bold text-xs bg-opacity-10  text-green-500">
            ● {status}
          </span>
        </div>
        <span className="text-[#7c5dfa] hidden sm:block group-hover:translate-x-1 transition-transform">
          {`>`}
        </span>
      </div>
    </div>
  );
}
// export default function InvoiceItem({ id, dueDate, client, amount, status }: InvoiceProps) {
//   return (
//     <div className="flex items-center justify-between bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-transparent hover:border-purple-500 transition-colors cursor-pointer group">
//       <div className="flex items-center gap-6 flex-1">
//         <span className="font-bold text-gray-900 w-20"><span className="text-gray-400">#</span>{id}</span>
//         <span className="text-gray-400 text-sm">Due {dueDate}</span>
//         <span className="text-gray-400 text-sm flex-1">{client}</span>
//       </div>
      
//       <div className="flex items-center gap-8">
//         <span className="font-bold text-lg text-gray-900">£ {amount}</span>
//         <StatusBadge status={status} />
//         <ChevronRight className="text-purple-500 group-hover:translate-x-1 transition-transform" size={16} />
//       </div>
//     </div>
//   );
// }