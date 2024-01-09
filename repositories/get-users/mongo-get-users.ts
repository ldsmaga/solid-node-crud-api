import { MongoClient } from "../../database/mongo";
import { IGetUsersRepository } from "../../src/controllers/get-users/protocols";
import { User } from "../../src/models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<Omit<User, "id">>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
