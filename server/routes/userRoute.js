import express from "express"

import { create, getAllUsers } from "../controller/userController.js";

const route = express.Router();

route.post("/user/create", create);
route.get("/user", getAllUsers);

export default route;