import express from "express"
import { sequelize } from "./database"
import { adminJS, adminJSRouter } from "./adminjs"

const app = express()

app.use(express.static('public'))

app.use(adminJS.options.rootPath, adminJSRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB Connection successful')
  })
  console.log(`Server started successfully at port ${PORT}`)
})