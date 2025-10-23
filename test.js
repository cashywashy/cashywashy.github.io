const { createServer } = require("http");

const server = createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>bobsmith</h1>")
        res.end();
    });

server.listen(8000);
