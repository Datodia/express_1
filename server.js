const express = require('express')
const app = express()


app.use(express.json())

let arr = []
let id = 0;


app.get('/articles', (req, res) => {
    res.send(arr)
})

app.get('/articles/:id', (req, res) => {
    const id = req.params.id
    const article = arr.find(el => el.id == id)

    res.send(article)
})

app.post('/articles', (req, res) => {
    const articlesData = req.body
    id++
    arr.push({id: id, name: articlesData.name})
    res.status(201).json(articlesData)
})

app.patch('/articles/:id', (req,res) => {
    const id = req.params.id
    const { name } = req.body
    
    const article = arr.find(el => el.id == id)

    article.name = name

    res.send(200).json(article)
})

app.delete('/articles/:id', (req, res) => {
    const id = req.params.id

    arr =  arr.filter(el => el.id != id)
    res.status(200).json({message: "Deleted Sucsessfully"})
})

app.listen(3000)