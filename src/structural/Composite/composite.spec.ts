import { Employee } from "./composite";

describe("Composite Adapter", () => {

  enum RolesEnum {
    CEO = "CEO",
    juniorDeveloper = "Junior developer",
    QA = "Quality Assurance",
    juniorQA = "Quality Assurance junior",
  }

  enum SalaryEnum {
    CEO = 9999,
    juniorDeveloper = 5000,
    QA = 8000,
    juniorQA = 4000,
  }

  const nameOfCEO = "Vlado Tesanovic";

  const CEOEmployee = new Employee({
    name: nameOfCEO,
    role: RolesEnum.CEO,
    salary: SalaryEnum.CEO,
  });

  const QAEmployee = new Employee({
    name: "Bojan Ognjenovic",
    role: RolesEnum.QA,
    salary: SalaryEnum.QA,
  });

  const QATraineeEmployee = new Employee({
    name: "Jovana Stevanovic",
    role: RolesEnum.juniorQA,
    salary: SalaryEnum.juniorQA });

  const firstJuniorDeveloper = new Employee({
    name: "Milan Brckalo",
    role: RolesEnum.juniorDeveloper,
    salary: SalaryEnum.juniorDeveloper,
  });

  const secondJuniorDeveloper = new Employee({
    name: "Vladimir Kunarac",
    role: RolesEnum.juniorDeveloper,
    salary: SalaryEnum.juniorDeveloper,
  });

  const thirdJuniorDeveloper = new Employee({
    name: "Stevo Basevic",
    role: RolesEnum.juniorDeveloper,
    salary: SalaryEnum.juniorDeveloper,
  });

  beforeEach(() => {
    CEOEmployee.removeAllSubordinates();
    QAEmployee.removeAllSubordinates();
    firstJuniorDeveloper.removeAllSubordinates();
    secondJuniorDeveloper.removeAllSubordinates();
    thirdJuniorDeveloper.removeAllSubordinates();
    QATraineeEmployee.removeAllSubordinates();
  });

  it("should build single employee", () => {

    expect(CEOEmployee.getName()).toBe(nameOfCEO);
    expect(CEOEmployee.getRole()).toBe(RolesEnum.CEO);
    expect(CEOEmployee.getSalary()).toBe(SalaryEnum.CEO);
    expect(CEOEmployee.getSubordinates()).toEqual([]);
  });

  it("should build employee with one subordinate", () => {

    CEOEmployee.addSubordinate(QAEmployee);

    expect(CEOEmployee.getSubordinates()).toEqual([QAEmployee]);
  });

  it("should build employee with two levels of subordinates", () => {

    QAEmployee.addSubordinate(QATraineeEmployee);
    CEOEmployee.addSubordinate(QAEmployee);

    expect(CEOEmployee.getSubordinates()).toEqual([QAEmployee]);
    expect(QAEmployee.getSubordinates()).toEqual([QATraineeEmployee]);
  });

  it("should build company", () => {

    QAEmployee.addSubordinate(QATraineeEmployee);
    CEOEmployee.addSubordinate(QAEmployee, firstJuniorDeveloper, secondJuniorDeveloper, thirdJuniorDeveloper);

    expect(CEOEmployee.getSubordinates()).toEqual(
      [
        QAEmployee,
        firstJuniorDeveloper,
        secondJuniorDeveloper,
        thirdJuniorDeveloper,
      ]);

    expect(QAEmployee.getSubordinates()).toEqual([
      QATraineeEmployee,
    ]);
  });

  it("should build entire company, then fire one developer", () => {

    QAEmployee.addSubordinate(QATraineeEmployee);
    CEOEmployee.addSubordinate(QAEmployee, firstJuniorDeveloper, secondJuniorDeveloper, thirdJuniorDeveloper);

    expect(CEOEmployee.getSubordinates()).toEqual(
      [
        QAEmployee,
        firstJuniorDeveloper,
        secondJuniorDeveloper,
        thirdJuniorDeveloper,
      ]);
    CEOEmployee.removeSubordinate(secondJuniorDeveloper);

    expect(CEOEmployee.getSubordinates()).toEqual(
      [
        QAEmployee,
        firstJuniorDeveloper,
        thirdJuniorDeveloper,
      ]);
  });
});
