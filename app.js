const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index',{title: 'Royality, always be royal'})
})
app.get('/signin', (req, res) => {
    res.render('signin',{title: 'Sign in'})
})
app.get('/signup', (req, res) => {
    res.render('signup',{title: 'Sign up'})
})
app.get('/menu', (req, res) => {
    res.render('menu',{title: 'Menu'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
