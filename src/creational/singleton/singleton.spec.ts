import { Singleton } from './singleton';

describe("Singleton", () => {
  
  it("should to be same", () => {

    const singletonOne = Singleton.getInstance();
    const singletonTwo = Singleton.getInstance();

    expect(singletonOne === singletonTwo).toEqual;
  });
});
