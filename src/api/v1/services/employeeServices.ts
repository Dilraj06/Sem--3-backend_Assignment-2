/**
 * Employee Service for CRUD operations.
 */

import { employees, Employee } from "../../../data/employees";

let employeeData: Employee[] = employees;

/**
 * Get all employees.
 */
export const getAllEmployees = (): Employee[] => {
  return employeeData;
};

/**
 * Get employee by ID.
 */
export const getEmployeeById = (id: number): Employee | undefined => {
  return employeeData.find(emp => emp.id === id);
};

/**
 * Create new employee.
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
 */
export const updateEmployee = (id: number, updates: Partial<Employee>): Employee | null => {
  const index = employeeData.findIndex(emp => emp.id === id);
  if (index === -1) return null;
  employeeData[index] = { ...employeeData[index], ...updates, id };
  return employeeData[index];
};

/**
 * Delete employee.
 */
export const deleteEmployee = (id: number): boolean => {
  const index = employeeData.findIndex(emp => emp.id === id);
  if (index === -1) return false;
  employeeData.splice(index, 1);
  return true;
};