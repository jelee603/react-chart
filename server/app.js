const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const list = [];
    let i = 1000;

    while(i > 0) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const value = Math.round(Math.random() * 1000);

        const obj = [d.getTime(), value]
        list.push(obj);
        i--;
    }
    // res.send('Hello World!')
    res.send({data: list});
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

