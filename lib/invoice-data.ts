
export interface InvoiceData {
  id: string;
  dueDate: string;
  name: string;
  atbp: number; //amount to be paid is (atbp)
  status: string;
}

export const blogPosts: InvoiceData[] = [
  {
    id: "#XM9141",
    dueDate: "18/7/26",
    name: "Alex Grim",
    atbp: 1200,
    status: "pending"
  }
]