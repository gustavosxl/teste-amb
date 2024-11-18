const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    try {
        // res.send("teste")
        res.sendFile(__dirname + "/public/index.html")
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})