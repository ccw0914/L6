
const a = require('./route')

module.exports.handler = function (req, resp, context) {   
    console.log('hello world')
    console.log(req.url)
    resp.setHeader('content-type', 'application/json')
    var uri = (req.url).split('/')
    console.log('test now 1')
    console.log(uri)
    console.log('test now 2')
    console.log(typeof a.get)

    if (uri.length == 0) {
        resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad Request' }, null, ''))
    } else {
        var route = uri[uri.length - 1]
        console.log(route)
        resp.send(JSON.stringify(a.get(route)))
        /*
        switch (req.method) {
            case 'GET':
                resp.send(JSON.stringify({ 'code': 200, 'body': 'This is a GET request' }))
                break
            case 'POST':
                resp.send(JSON.stringify({ 'code': 200, 'body': 'This is a POST request' }))
        }
        */
    }
}

