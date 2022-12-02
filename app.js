const express = require('express'); //ประกาศตัวแปรเรียกใช้ express
const chalk = require('chalk'); //ประกาศตัวแปรเรียกใช้ chalk
const debug = require('debug')('app'); //ประกาศตัวแปรเรียกใช้ debug
const morgan = require('morgan'); //ประกาศตัวแปรเรียกใช้ morgan
const app = express(); //เรียกใช้ express
const port = 3000; //กำหนด Port

app.use(morgan('combined')); //เรียกใช้ morgan
app.get("/", (req,res) => { //request/response
    res.send('weerako'); //ตอบกลับทาง browser
})

app.listen(port,() => { //ตอบกลับที่พอร์ท
    debug(chalk.yellow('Listening on port :'),chalk.greenBright(port)); //แสดง log,ใช้ chalk เปลี่ยนสีตัวหนังสือ
})
