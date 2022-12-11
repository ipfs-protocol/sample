import { Router } from 'express';
import rootFunc from './function/rootFunc';

const router = Router();

router
  .get('^/$|index(.html)?', rootFunc.RootView);

export default router;