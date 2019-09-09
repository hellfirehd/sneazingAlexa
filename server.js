const express = require('express')
const app = express()
const axios = require('axios');
const port = 3000
var inteval = 10
var oldInterval = 5
timer = setInterval(normalSneaze,inteval*100);  
setInterval(updateSneze, 500)

function updateSneze() {
    console.log("hi")
    if (inteval != oldInterval) {
        console.log("HOI")
        clearInterval(timer)
        oldInterval = inteval
        if (inteval < 7 && inteval > 3) timer = setInterval(meanoSneaze,inteval*1000);
        if (inteval <= 3) {
            timer = setInterval(meanoBenoSneaze,inteval*1000);
        }
        if (inteval >= 7) {
            timer = setInterval(normalSneaze,inteval*1000);
        }
    }
}


function normalSneaze() {
    console.log("normalSneaze")
    if (inteval > 1) inteval --
    axios.get('http://127.0.0.1:1880/normalSneaze')
}

function meanoSneaze() {
    console.log("meanoSneaze")
    if (inteval > 2) inteval -= 2
    axios.get('http://127.0.0.1:1880/menoSneaze')
}

function meanoBenoSneaze() {
    console.log("meanoBenoSneaze")
    axios.get('http://127.0.0.1:1880/menobenoSneaze')
}



app.get("/end", (req, res) => {
    console.log("end")
    inteval = 180
    clearInterval(timer)
    res.send("hoi")
})



app.listen(port, () => console.log("Alexa server id listening on port ${port}!`))