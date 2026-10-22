
const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

// Doughnuts recipe ingredients
const ingredients = [
    { name: "Flour", amount: 2, unit: "cups" },
    { name: "Sugar", amount: 0.5, unit: "cup" },
    { name: "Milk", amount: 1, unit: "cup" },
    { name: "Eggs", amount: 2, unit: "pieces" },
    { name: "Butter", amount: 3, unit: "tablespoons" }
]

// Track ingredients already used
const used = [false, false, false, false, false]

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    res.write('<html>')
    res.write('<head><title>Dindu Doughnuts Recipe</title></head>')
    res.write('<body>')

    res.write('<h1>Dindu lists an ingredient</h1>')
    res.write('<h2>Doughnuts Ingredients</h2>')

    // Generate a random index
    let index = Math.floor(Math.random() * ingredients.length)

    // Find an ingredient that has not been used
    let count = 0

    while (used[index] === true && count < ingredients.length) {
        index = (index + 1) % ingredients.length
        count++
    }

    if (count === ingredients.length) {
        res.write('<div>nothing left</div>')
    } else {
        const item = ingredients[index]

        used[index] = true

        res.write('<div>')
        res.write('<p>Ingredient Index: ' + index + '</p>')
        res.write('<p>Name: ' + item.name + '</p>')
        res.write('<p>Amount: ' + item.amount + '</p>')
        res.write('<p>Unit: ' + item.unit + '</p>')
        res.write('</div>')
    }

    res.end('</body></html>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
