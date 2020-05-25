import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', ({ res }) => {
  res.body = 'Hello';
});

export default router;
