import { Router } from 'express';

const router = new Router();

router.get('/test', (request, response) => {
  return response.status(200).json({ Application: 'YOUR APP IS RUNNING...' });
});

export default router;
