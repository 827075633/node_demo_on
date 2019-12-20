const myMoment = require('moment')
class times {
    constructor () {
        this.data = {}
        this.startTime = '00:00:00'
        this.timer = null
    }
    upDadeApi (ctx) {
        this.timer = setInterval(() => {
            const newData = myMoment().format('HH:mm:ss')
            if (this.startTime === newData) {
                console.log('==========刷新获取最新数据=========')
                this.data = ctx.response
                console.log('data',this.data)
                this.timer = null
                clearInterval(this.timer)
            } else {
                console.log('===走缓存===')
            }
        }, 500);
    }

}

module.exports = times