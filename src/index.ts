import { Elysia, t } from 'elysia';
import { swagger } from '@elysiajs/swagger';

const Post = t.Object({
    title: t.String(),
});

const app = new Elysia()
    .use(swagger())
    .get('/', () => 'Hello Elysia')
    .post(
        '/posts',
        ({ body }) => {
            return body;
        },
        {
            type: 'json',
            body: t.Array(Post),
            response: {
                200: t.Array(Post),
            },
        },
    )
    .listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
console.log(`🦊 Docs can be found at http://${app.server?.hostname}:${app.server?.port}/swagger`);
