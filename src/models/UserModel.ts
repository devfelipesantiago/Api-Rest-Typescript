import { NewEntity } from '../interfaces';
import SequelizeUser from '../database/models/SequelizeUser';
import { IUser, IUserResponse } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findAll(): Promise<IUser[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, name, email, password }) => (
      { id, name, email, password }
    ));
  }

  async findById(id: IUser['id']): Promise<IUser | null> {
    const dbdata = await this.model.findByPk(id);
    if (dbdata === null) return null;

    const { name, email, password }: IUser = dbdata.dataValues;
    return { id, name, email, password };
  }

  async create(data: NewEntity<IUser>): Promise<IUserResponse> {
    const dbData = await this.model.create(data);

    const { id, name, email }: IUser = dbData.dataValues;
    return { id, name, email };
  }

  async findByEmail(email: string): Promise<IUserResponse | null> {
    const user = await this.model.findOne({
      where: { email },
    });

    return user;
  }

  async update(id: IUser['id'], data: Partial<NewEntity<IUser>>): Promise<IUser | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } });
    if (affectedRows === 0) return null;

    return this.findById(id);
  }

  async delete(id: IUser['id']): Promise<number> {
    return this.model.destroy({ where: { id } });
  }
}
