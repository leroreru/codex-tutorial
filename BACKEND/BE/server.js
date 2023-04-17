import "dotenv/config"
import express from "express"
import router from "./routes/router.js"

const app = express()
const port = process.env.PORT || 3002 // asign port dari dotenv atau menggunakan OR
app.use(express.json()) //agar support mengirim json
app.use(express.urlencoded({extended:true}))

app.use(router)
app.use('/uploads',express.static('uploads'))

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})