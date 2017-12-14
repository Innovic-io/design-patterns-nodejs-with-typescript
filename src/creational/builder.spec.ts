import {UserBuilder} from "./builder";

describe("User Builder", () => {

  let builder;

  const firstName = "Milan";
  const lastName = "Brčkalo";

  beforeEach(() => {
    builder = new UserBuilder();
  });

  it("should be complete", () => {

    const user = builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setAge(20)
      .setEmail("milan.brckalo@innovic.io")
      .build();

    expect(user.FirstName).toEqual(firstName);
    expect(user.LastName).toEqual(lastName);
    expect(user.Age).toBeGreaterThan(0);
    expect(user.Email).toMatch(/\S+@\S+\.\S+/);
  });

  it("should be only with first and last name", () => {

    const user = builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .build();

    expect(user.FirstName).toBe(firstName);
    expect(user.LastName).toBe(lastName);
  });
});
