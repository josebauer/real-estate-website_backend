import 'dotenv/config'
import express from "express"
import cors from "cors"
import { sequelize } from "./database"
import { adminJS, adminJSRouter } from "./adminjs"
import { router } from "./routes"

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(adminJS.options.rootPath, adminJSRouter)

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB Connection successful')
  })
  console.log(`Server started successfully at port ${PORT}`)
})