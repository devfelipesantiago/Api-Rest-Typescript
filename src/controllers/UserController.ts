import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import UserService from '../services/UserService';
// express-async-erros

export default class UserController {
  constructor(private userService = new UserService()) { }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.userService.create(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.userService.findAll();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const serviceResponse = await this.userService.getUserById(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const user = req.body;
    const serviceResponse = await this.userService.updateUser(id, user);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const serviceResponse = await this.userService.deleteUser(id);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }
}