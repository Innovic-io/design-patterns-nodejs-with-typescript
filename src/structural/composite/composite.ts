// inspired by: https://www.tutorialspoint.com/design_pattern/composite_pattern.htm

export interface IEmployee {
  readonly name: string;
  readonly role: string;
  readonly salary: number;
  readonly subordinates?: Employee[];
}

interface IEmployeeFunctions {
  getName(): string;
  getRole(): string;
  getSalary(): number;
  getSubordinates(): Employee[];
  addSubordinate(...employee: Employee[]): Employee[];
  removeSubordinate(employee: Employee): Employee;
  removeAllSubordinates(): number;
}

export class Employee implements IEmployeeFunctions {

  private employeeData: IEmployee;

  constructor(employee: IEmployee) {
    this.employeeData = Object.assign( employee, { subordinates: employee.subordinates || [] });
  }

  // tslint:disable-next-line
  getName(): string {

    return this.employeeData.name;
  }

  // tslint:disable-next-line
  getRole(): string {
    return this.employeeData.role;
  }

  // tslint:disable-next-line
  getSalary(): number {
    return this.employeeData.salary;
  }

  // tslint:disable-next-line
  getSubordinates(): Employee[] {
    return this.employeeData.subordinates;
  }

  // tslint:disable-next-line
  addSubordinate(...employee: Employee[]): Employee[] {
    this.employeeData.subordinates.push(...employee);

    return employee;
  }

  // tslint:disable-next-line
  removeSubordinate(employee: Employee): Employee {
    const indexOfEmployeeToRemove = this.employeeData.subordinates.indexOf(employee);

    this.employeeData.subordinates.splice(indexOfEmployeeToRemove, 1);
    return employee;
  }

  // tslint:disable-next-line
  removeAllSubordinates(): number {
    const count = this.employeeData.subordinates.length;
    this.employeeData = Object.assign(this.employeeData, {subordinates: []});

    return count;
  }
}
