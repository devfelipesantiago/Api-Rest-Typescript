import { NewEntity } from '..';
import { IBook } from './IBook';

export interface IBookModel {
  create(data: Partial<IBook>): Promise<IBook>,
  findAll(): Promise<IBook[]>,
  findById(id: IBook['id']): Promise<IBook | null>
  update(id: IBook['id'], data: Partial<NewEntity<IBook>>): Promise<IBook | null>,
  delete(id: IBook['id']): Promise<number>,
}