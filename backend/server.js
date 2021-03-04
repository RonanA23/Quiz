const express = require('express')
const mongoose= require('mongoose')
const Query=require('./dbModel.js')
const cors=require('cors')

const app= express()



app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://admin:@cluster0.pxvfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log('you are connected to mongoose'))


app.get('/',(req,res)=>{
    res.send('yeah your onboard')
})

app.get('/read',async(req,res)=>{
    Query.find({},(err,result)=>{
        if(err){
            res.send(err)
            console.log('error on backend')
        }else{res.send(result)
              console.log('we sending',res)}
    })
})

app.post('/post',async(req,res)=>{
    console.log('posting')
    const question = req.body.question
    const url = req.body.url
    const optionA = req.body.optionA
    const optionB = req.body.optionB
    const optionC = req.body.optionC
    const optionD = req.body.optionD
    const answer = req.body.answer
    const query= new Query({
        question,url,optionA,optionB,optionC,optionD,answer
    })
    try{
        await query.save()
        res.send('inserted data')
    }catch(err){
        console.log('error')
    }
})

app.listen(3001,(req,res)=>
{console.log('listeing here')})
