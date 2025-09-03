import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.post('/register', (req, res) => userController.create(req, res));
router.get('/', (req: Request, res: Response) => userController.getAll(req, res));
router.get('/:id', (req: Request, res: Response) => userController.getById(req, res));
router.put('/:id', (req: Request, res: Response) => userController.update(req, res));
router.delete('/:id', (req: Request, res: Response) => userController.delete(req, res));

export default router;