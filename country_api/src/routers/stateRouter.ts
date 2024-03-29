import { Router } from 'express';
import { 
  getAllStates,
  getStateById,
  createState,
  updateState,
  deleteState
} from '../controllers/states';

const router = Router();

router.get('/', getAllStates);
router.get('/:id', getStateById);
router.post('/', createState);
router.put('/:id', updateState)
router.delete('/:id', deleteState)

export default router;