const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        //ฟังก์ชันทำงานปกติ แต่ว่าโค้ด req นั้นยังขึ้นพร้อมกับ email ถึงแม้ว่าจะแก้ path ตามที่แนะนำใน doc ของ expressjs
        message: 'ขอบคุณ! อีเมล ([$]){req.body.email} ได้รับการลงทะเบียนแล้ว'
    })
})

app.listen(process.env.PORT || 8081)