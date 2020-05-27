import { Router } from 'https://deno.land/x/oak/mod.ts';

import getTodos from './controllers/todos/get.js';
import postTodos from './controllers/todos/post.js';
import deleteTodos from './controllers/todos/delete.js';

const router = new Router();

router.get('/', ({ response }) => {
  response.body = 'Hello';
});

router.get('/todos', getTodos);
router.post('/todos', postTodos);
router.delete('/todos/:id', deleteTodos);

export default router;
