const app = require('./app')

app.listen(process.env.PORT || 3000)
console.log(`listening port ${process.env.PORT || 3000}`)
