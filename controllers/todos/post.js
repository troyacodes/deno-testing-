import { FILE_PATH } from '../../config.js';

export default async ({ response, request }) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const { value } = await request.body();

    const data = await Deno.readFile(FILE_PATH);
    const todos = await JSON.parse(decoder.decode(data));

    const newTodo = {
      id: todos.length,
      title: value.title,
      completed: false,
    };

    todos.push(newTodo);

    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)));

    response.status = 200;
    response.body = { status: 'success', todos };
  } catch (error) {
    response.status = 500;
    response.body = { status: 'failed', error };
  }
};
