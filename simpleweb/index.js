const express = require("express")

const app = express()
const port = 9123

app.get('/', (req, res) => {
    res.send("Hi there!")
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})