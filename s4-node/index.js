const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/:id', (req, res) => {
    let data = [{id:1}, {id:2}, {id:3}]
    console.log(req.body)
    console.log(req.query.x)
    console.log(req.params.id)
    res.json({
        status: true,
        data,
        message:"done"
    })
})

app.post('/',(req,res)=>{

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
