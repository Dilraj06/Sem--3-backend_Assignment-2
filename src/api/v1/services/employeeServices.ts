/**
 * Employee Service for CRUD operations.
 */

import { employees, Employee } from "../../../data/employees";

let employeeData: Employee[] = employees;

/**
 * Get all employees.
 * @returns Array of all employees
 */
export const getAllEmployees = (): Employee[] => {
  return employeeData;
};

/**
 * Get employee by ID.
 * @param id - Employee ID
 * @returns Employee object or undefined
 */
export const getEmployeeById = (id: number): Employee | undefined => {
  return employeeData.find(emp => emp.id === id);
};

/**
 * Create new employee.
 * @param employee - Employee data without ID
 * @returns Newly created employee with ID
 */
export const createEmployee = (employee: Omit<Employee, "id">): Employee => {
  const newEmployee: Employee = {
    id: employeeData.length > 0 ? employeeData[employeeData.length - 1].id + 1 : 1,
    ...employee
  };
  employeeData.push(newEmployee);
  return newEmployee;
};

/**
 * Update existing employee.
 * @param id - Employee ID
 * @param updates - Partial employee data
 * @returns Updated employee or null
 */
export const updateEmployee = (id: number, updates: Partial<Employee>): Employee | null => {
  const index = employeeData.findIndex(emp => emp.id === id);
  if (index === -1) return null;
  employeeData[index] = { ...employeeData[index], ...updates, id };
  return employeeData[index];
};

/**
 * Delete employee.
 * @param id - Employee ID
 * @returns True if deleted, false otherwise
 */
export const deleteEmployee = (id: number): boolean => {
  const index = employeeData.findIndex(emp => emp.id === id);
  if (index === -1) return false;
  employeeData.splice(index, 1);
  return true;
};

/**
 * Get employees by branch ID.
 * @param branchId - Branch ID
 * @returns Array of employees belonging to the branch
 */
export const getEmployeesByBranch = (branchId: number): Employee[] => {
  return employeeData.filter(emp => emp.branchId === branchId);
};

/**
 * Get employees by department.
 * @param department - Department name
 * @returns Array of employees in the department
 */
export const getEmployeesByDepartment = (department: string): Employee[] => {
  return employeeData.filter(
    emp => emp.department.toLowerCase() === department.toLowerCase()
  );
};