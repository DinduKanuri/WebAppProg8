const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html><head><title>Places I Would Like to Visit</title></head>')
      res.write('<body>')

      res.write('<h2>Places I Would Like to Visit</h2>')
      res.write('<p>The following table shows cities I would like to visit, their distance from Miami, and estimated travel costs.</p>')

      res.write('<table border="1">')

      res.write('<tr><th>City</th><th>Reason to Visit</th><th>Distance from Miami</th><th>Estimated Travel Cost</th></tr>')

      res.write('<tr><td>New York City</td><td>To visit Times Square and Central Park</td><td>1,280 miles</td><td>$250</td></tr>')

      res.write('<tr><td>Los Angeles</td><td>To visit Hollywood and the beaches</td><td>2,730 miles</td><td>$350</td></tr>')

      res.write('<tr><td>Las Vegas</td><td>To see the Strip and entertainment</td><td>2,520 miles</td><td>$300</td></tr>')

      res.write('<tr><td>Seattle</td><td>To visit the Space Needle and explore the city</td><td>3,300 miles</td><td>$400</td></tr>')

      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})