import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.get('/about', (req, res) => {
    res.send('About us!')
  })
  app.get('/contact', (req, res) => {
    res.send('contact us')
  })
  app.get('/blog', (req, res) => {
    res.send('Hello blog!')
  })

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`);
})