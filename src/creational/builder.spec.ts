import { UserBuilder } from "./builder";

describe("User", () => {

  let builder;

  beforeEach(() => {
    builder = new UserBuilder();
  });

    it("should be complete", () => {

      const user = builder
                    .setFirstName("Milan")
                    .setLastName("Brckalo")
                    .setAge(20)
                    .setEmail("milan.brckalo@innovic.io")
                    .get();

      expect(user.FirstName).toHaveLength;
      expect(user.LastName).toHaveLength;
      expect(user.Age).toBeGreaterThan(0);
      expect(user.Email).toMatch(/\S+@\S+\.\S+/);
    });

    it("should be only with first and last name", () => {

      const user = builder
                    .setFirstName("Milan")
                    .setLastName("Brckalo")
                    .get();

      expect(user.FirstName).toHaveLength;
      expect(user.LastName).toHaveLength;
    });
});
