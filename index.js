const express = require('express')
const fs = require('fs')
const app = express()

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

fs.readFile('user_data_1000.json','utf8',function(err,data){
    let arr = []
    arr = JSON.parse(data)
    app.get('/users/:ip',function(req,res){     
        let ip = req.params.ip   
        let newArr = []

        arr.map((item) => {
            return {...item, ip_address: item.ip_address.split('.')}
        })
    
        newArr = arr.filter((item) => {
            return item.ip_address.includes(ip) ? item : null
        })

        res.json(newArr)
    })
})


app.listen(5000, function(){
    console.log('OK')
})