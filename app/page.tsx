// app/page.tsx
import { INVOICES } from "@/lib/invoice-data";
import EmptyState from "./components/ui/EmptyState";
import InvoiceItem from "./components/InvoiceItem";
import Header from "./components/Header"; // Move your header logic here

export default function InvoicesPage() {
  const isEmpty = INVOICES.length === 0;

  return (
    <>
      <Header count={INVOICES.length} />
      
      <section className="mt-12">
        {isEmpty ? (
          <EmptyState />
        ) : (
          <div className="space-y-4">
            {INVOICES.map((invoice) => (
              <InvoiceItem key={invoice.id} {...invoice} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}