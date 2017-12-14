// https://en.wikipedia.org/wiki/Builder_pattern

export class UserBuilder {

    private user: User;

    constructor() {
        this.user = new User();
    }

    public setFirstName(firstName: string): UserBuilder {
        this.user.setFirstName(firstName);

        return this;
    }
    public setLastName(lastName: string): UserBuilder {
        this.user.setLastName(lastName);

        return this;
    }
    public setAge(age: number): UserBuilder {
        this.user.setAge(age);

        return this;
    }
    public setEmail(email: string): UserBuilder {
        this.user.setEmail(email);

        return this;
    }

    public build(): User {
        return this.user;
    }
}

export class User {

    private firstName?: string;
    private lastName?: string;
    private age?: number;
    private email?: string;

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    get FirstName(): string {

        return this.firstName;
    }
    get LastName(): string {

        return this.lastName;
    }
    get Age(): number {

        return this.age;
    }
    get Email(): string {

        return this.email;
    }
}
