const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath, {extensions: ['html']}))

app.use(function (req, res) {
    res.status(404).sendFile(publicDirPath + '/404.html')
})

app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})