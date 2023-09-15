import { Elysia, t } from 'elysia';
import { swagger } from '@elysiajs/swagger';

const Post = t.Object({
    title: t.String(),
});

const Posts = t.Array(Post);

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
            body: Posts,
            response: {
                200: Posts,
            },
        },
    )
    .listen(3000);

const origin = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${origin}`);
console.log(`🦊 Docs can be found at ${origin}/swagger`);

console.log();
console.log('Posts schema:');
console.log(JSON.parse(JSON.stringify(Posts)));

console.log();
console.log('Generated Posts response schema:');
const res = await app.fetch(new Request(origin + '/swagger/json'));
const schema = await res.json();
console.log({
    responses: schema['paths']['/posts']['post']['responses'],
});
