import { Router } from 'express';

// controllers
import User from './app/controller/user.controller';

const router = new Router();

router.get('/test', (request, response) => {
  return response.status(200).json({ Application: 'YOUR APP IS RUNNING...' });
});

router.get('/users', User.index);
router.post('/users', User.store);
router.put('/users', User.update);

export default router;
