
const http = require('http')
const fs = require('fs')
const path = require('path')

const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {

    console.log("Request received")
    console.log(req.url)

    const url = new URL(req.url, `http://${hostname}:${port}`)
    const search_params = url.searchParams

    console.log("Queries: " + search_params)

    res.setHeader('Access-Control-Allow-Origin', '*')

    // Serve requester.html
    if (req.method === 'GET' && url.pathname === '/requester.html') {

        fs.readFile(path.join(__dirname, 'requester.html'), (err, data) => {

            if (err) {
                res.statusCode = 500
                res.end('Could not load HTML file')
                return
            }

            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })

        return
    }

    // Perform computation
    if (req.method === 'GET' && url.pathname === '/') {

        const x = Number(search_params.get('x'))
        const y = Number(search_params.get('y'))

        const resultX = Math.trunc(x)
        const resultY = Math.trunc(y)

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')

        res.end(`Math.trunc(${x}) is ${resultX} and Math.trunc(${y}) is ${resultY}`)

    } else {

        console.log("Status 404")
        res.statusCode = 404
        res.end('Not Found')
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
