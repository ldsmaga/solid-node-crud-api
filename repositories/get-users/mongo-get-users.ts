import { IGetUsersRepository } from "../../src/controllers/get-users/protocols";
import { User } from "../../src/models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "José",
        lastName: "Mariano",
        email: "Jose@ok.com",
        password: "123",
      },
    ];
  }
}
