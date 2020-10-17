const express = require("express")
const welcomeRouter = require('./routers/welcomeRouter')
const carsRouter = require('./routers/carsRouter')


const server = express()
const port = process.env.PORT || 5000


server.use(express.json())
server.use(welcomeRouter)
server.use(carsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})