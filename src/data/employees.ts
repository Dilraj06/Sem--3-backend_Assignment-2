/**
 * Employee data module.
 * @packageDocumentation
 */

/**
 * Employee interface representing a company employee.
 */
export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  branchId: number;
}

/**
 * Sample employee dataset.
 */
export const employees: Employee[] = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Branch Manager",
    department: "Management",
    email: "alice.johnson@pixell-river.com",
    phone: "604-555-0148",
    branchId: 1
  },
  {
    id: 2,
    name: "Amandeep Singh",
    position: "Customer Service Representative",
    department: "Customer Service",
    email: "amandeep.singh@pixell-river.com",
    phone: "780-555-0172",
    branchId: 2
  },
  {
    id: 3,
    name: "Maria Garcia",
    position: "Loan Officer",
    department: "Loans",
    email: "maria.garcia@pixell-river.com",
    phone: "204-555-0193",
    branchId: 3
  }
];