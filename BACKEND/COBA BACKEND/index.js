const express = require ('express')//manggil express module dari nodemodule
const app = express() //untuk memanggil function express
const port = 3000 // port yang akan di gunakan

//routes /url / endpoint utama method get
app.get('/',(req,res)=> {   
res.send('Hello World')//mengirim respon
})

app.get('/hello',(req,res)=> {   
    res.send('Hello ke2')//mengirim respon
    })

app.listen(port,()=>{ //untuk running express
    console.log(`Server start at port ${port}`)
})
