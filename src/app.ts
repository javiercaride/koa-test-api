import Koa from "koa"
import Router from "koa-router";

const application = new Koa();  
const router = new Router();

router.get("/", async (ctx,next) => {
  ctx.body = "Hello Koa!";

  await next();
})

application.use(router.routes()).use(router.allowedMethods());

application.listen(3000);