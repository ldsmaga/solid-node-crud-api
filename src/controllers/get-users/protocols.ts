import { User } from "../../models/users";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[] | string>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}
