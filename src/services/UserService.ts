import * as bcrypt from 'bcrypt';
import { IUser, IUserResponse } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';
import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
import UserModel from '../models/UserModel';
import { NewEntity } from '../interfaces';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async findAll(): Promise<ServiceResponse<IUserResponse[]>> {
    const Users = await this.userModel.findAll();
    const UsersResponse = Users.map((User) => ({
      id: User.id,
      name: User.name,
      email: User.email,
    }));
    return { status: 'SUCCESSFUL', data: UsersResponse };
  }

  public async getUserById(id: number): Promise<ServiceResponse<IUserResponse>> {
    const User = await this.userModel.findById(id);
    if (User === null) return { status: 'NOT_FOUND', data: { message: `User ${id} not found` } };
    const { name, email } = User as IUser;
    return { status: 'SUCCESSFUL', data: { id, name, email } };
  }

  public async create(data: NewEntity<IUser>): Promise<ServiceResponse<IUserResponse>> {
    const userExist = await this.userModel.findByEmail(data.email);

    if (userExist) {
      return { status: 'CONFLICT', data: { message: 'User already registered' } };
    }

    const hashedPassword = bcrypt.hashSync(data.password, 10);
    const userEncrypited = { ...data, password: hashedPassword };

    const newUser = await this.userModel.create(userEncrypited);
    return { status: 'SUCCESSFUL', data: newUser };
  }

  public async updateUser(id: number, User: NewEntity<IUser>)
    : Promise<ServiceResponse<ServiceMessage>> {
    const UserFound = await this.userModel.findById(id);
    if (!UserFound) return { status: 'NOT_FOUND', data: { message: `User ${id} not found` } };

    const updatedUser = await this.userModel.update(id, { ...User });
    if (!updatedUser) {
      return {
        status: 'CONFLICT',
        data: { message: `There are no updates to perform in User ${id}` },
      };
    }
    return { status: 'SUCCESSFUL', data: { message: 'User updated' } };
  }

  public async deleteUser(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const userFound = await this.userModel.findById(id);
    if (!userFound) return { status: 'NOT_FOUND', data: { message: `User ${id} not found` } };

    await this.userModel.delete(id);
    return { status: 'SUCCESSFUL', data: { message: 'User deleted' } };
  }
}
