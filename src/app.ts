import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';

const application = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { hello: 'Koa' };

  await next();
});

application.use(router.routes()).use(router.allowedMethods());
application.use(BodyParser());

application.listen(3000);
