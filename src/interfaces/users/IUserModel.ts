import { NewEntity } from '..';
import { ICRUDModelReader } from '../ICRUDModel';
import { IUser, IUserResponse } from './IUser';

export interface IUserModel extends ICRUDModelReader<IUser> {
  create(data: NewEntity<IUser>): Promise<IUserResponse>,
  update(id: IUser['id'], data: Partial<NewEntity<IUser>>): Promise<IUser | null>,
  delete(id: IUser['id']): Promise<number>,
  findByEmail(email: string): Promise<IUserResponse | null>
}