import { User } from "../../models/users";
import { HttpRequest, HttpResponse } from "../protocols";

export interface UpdateUserParams {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export interface IUpdateUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>>;
}
export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}
