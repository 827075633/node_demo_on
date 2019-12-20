const Koa = require('koa')
// const Router = require('koa-router')
const app = new Koa()
// const router = new Router()
const times = require('./times')
const myTimes = new times()

app.use(async (ctx,next) => {
    const start = new Date().getTime()
    console.log(`开始：${ctx.url}`)
    await next();
    const end = new Date().getTime()
    let dataList = [{'one':1,'two':2,'three':3}]
    console.log(`请求${ctx.url},耗时${parseInt(end - start)} ms`)
    if (ctx.url == '/api/data/:xxx' && ctx.method == 'GET') {
        ctx.response = dataList
        ctx.body = '123'
    }
    myTimes.upDadeApi(ctx)
})
// app.use(router.routes())
app.listen('3000', () => {
    console.log('app is 3000')
})