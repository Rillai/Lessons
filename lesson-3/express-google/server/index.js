const express = require('express')
const unirest = require('unirest')
const port = 3000

const api = express()
api.use(express.json())

api.get('/?', (res, req)=>{
  const request = unirest("GET", "https://google-translate1.p.rapidapi.com/language/translate/v2/languages");
  
  request.headers({
    "accept-encoding": "application/gzip",
    "x-rapidapi-key": "be0a86f3b8mshdb6ba4669d37609p197e9cjsn0d965673b741",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "useQueryString": true
  });
  
  request.form({
    'q':req.query.translate,
    'source':req.query.lang1,
    'target':req.query.lang2
  })

  request.end( (response) => {
    if (res.error) throw new Error(res.error);
  
    res.send(response.body.data.translations);
  });
})

api.listen(port)
console.log('Server has been started')