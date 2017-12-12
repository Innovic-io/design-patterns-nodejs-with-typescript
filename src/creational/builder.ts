// https://en.wikipedia.org/wiki/Builder_pattern

export class UserBuilder {
    private first_name?: string;
    private last_name?: string;
    private age?: number;
    private email?: string;

    // setters
    setFirstName(first_name: string): UserBuilder {
        this.first_name = first_name;

        return this;
    }
    setLastName(last_name: string): UserBuilder {
        this.last_name = last_name;

        return this;
    }
    setAge(age: number): UserBuilder {
        this.age = age;

        return this;
    }
    setEmail(email: string): UserBuilder {
        this.email = email;

        return this;
    }

    // getters
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

    // return results
    get(): User {
        return new User(this);
    }
}

export class User {
    private first_name?: string;
    private last_name?: string;
    private age?: number;
    private email?: string;

    constructor(user: UserBuilder) {
        this.first_name = user.FirstName;
        this.last_name = user.LastName;
        this.age = user.Age;
        this.email = user.Email;
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
