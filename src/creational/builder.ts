// https://en.wikipedia.org/wiki/Builder_pattern

export class UserBuilder {
    private user: User;

    constructor() {
        this.user = new User;
    }

    setFirstName(first_name: string): UserBuilder {
        this.user.setFirstName(first_name);

        return this;
    }
    setLastName(last_name: string): UserBuilder {
        this.user.setLastName(last_name);

        return this;
    }
    setAge(age: number): UserBuilder {
        this.user.setAge(age);

        return this;
    }
    setEmail(email: string): UserBuilder {
        this.user.setEmail(email);

        return this;
    }

    build(): User {
        return this.user;
    }
}

export class User {
    private first_name?: string;
    private last_name?: string;
    private age?: number;
    private email?: string;

    constructor() {}

    setFirstName(first_name: string): void {
        this.first_name = first_name;
    }
    setLastName(last_name: string): void {
        this.last_name = last_name;
    }
    setAge(age: number): void {
        this.age = age;
    }
    setEmail(email: string): void {
        this.email = email;
    }

    get FirstName(): string {

        return this.first_name;
    }
    get LastName(): string {

        return this.last_name;
    }
    get Age(): number {

        return this.age;
    }
    get Email(): string {
        
        return this.email;
    }
}
