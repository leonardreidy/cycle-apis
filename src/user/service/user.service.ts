import { UserModel } from "../model/user.model";

// A post request should not contain an id.
export type UserCreationParams = Pick<UserModel, "email" | "name" | "phoneNumbers">;

export class UserService {
  public get(id: number, name?: string): UserModel {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): UserModel {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }
}