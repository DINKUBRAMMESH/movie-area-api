import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.send("response send")
})

app.listen(7000, (err) => {
    if(err) throw err
  console.log(`Example app listening on port 7000`)
})