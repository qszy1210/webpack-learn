const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    res.json({
        name: "qs"
    })
})
console.log('listen');
app.listen(8888);