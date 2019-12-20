const originRequest = require('request')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')

function request(url, callback) {
    const option = {
        encoding: null
    }
    originRequest(url, option,callback)
}

for (let i = 66354; i< 66359;i++) {
    // const url = `https://www.dy2018.com/i/${i}.html`
    const url = `http://www.dytt.com/xiazai/id${i}.html`
    request(url,function(err,res,body) {
        // const html = iconv.decode(body, 'gb2312') // 防止中文字体乱码，根据实际情况看是否需要转码
        const $ = cheerio.load(body) //相当于后台的jquery
        console.log($('.info h1').text())
    })
}