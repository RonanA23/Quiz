const mongoose=require('mongoose')

const QuestionSchema= new mongoose.Schema({
    question:String,
    url:String,
    optionA:String,
    optionB:String,
    optionC:String,
    optionD:String,
    answer:String
})

const Query = mongoose.model('Quiz',QuestionSchema)

module.exports= Query