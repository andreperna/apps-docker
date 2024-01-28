import http from "node:http"
import express from "express"

const host = '0.0.0.0';
const port = 3000;

const app = express()

app.get("/", (req, res) => {
    res.send("Hello Express Server");
});

const server = http.createServer(app)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})