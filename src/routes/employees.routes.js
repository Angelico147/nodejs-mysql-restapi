import { Router } from "express";
import {getEmployees,getEmployeesOne,postEmployees,updateEmployees,deleteEmployees} from '../controllers/employees.controller.js'



const router = Router()


router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployeesOne);

router.post('/employees', postEmployees);

router.patch('/employees/:id', updateEmployees);

router.delete('/employees/:id', deleteEmployees);




export default router