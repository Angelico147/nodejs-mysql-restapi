import express from 'express'
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'
import cors from 'cors';
// import { PORT } from './config.js'



const app = express()

app.use(cors());


app.use(express.json())

app.use(indexRoutes)
app.use('/api',employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endopoint not found'
    })
})

export default app;