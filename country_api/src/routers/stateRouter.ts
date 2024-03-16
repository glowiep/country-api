import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ msg: 'List of states'});
});

export default router;